import { Audio } from "expo-av";
import { useEffect, useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  isPlayingSound,
  setDurationSound,
  setPositionSound,
  setRepeat,
  setSliding,
} from "../redux/actions/playsound";
import { indexSong } from "../redux/actions/songs";

export default function usePlaySound(sound, setSound) {
  //const sound = useRef();
  const dispatch = useDispatch();
  const {
    dataPlaySongs,
    storeIndexSong,
    statusShowHide,
    storesound,
    statusSliding,
    statusRepeat,
    getDurationSound,
    getPositionSound,
    statusPlayingSound,

  } = useSelector((state) => state);

  // const [sound, setSound] = useState();
  //const [soundAsync, setSoundAsync] = useState();

  async function createSound(songs, index, callback) {
    const { sound: soundAsyncTemp } = await Audio.Sound.createAsync({
      uri: `http://192.168.1.4:8000/${songs[index].dir}`,
    });

    setSound(soundAsyncTemp)
    // sound =  soundAsync;
    // const { sound } = await Audio.Sound.createAsync({
    //   uri: `http://192.168.1.4:8000/${songs[index].dir}`,
    // });

    // setSound(sound);

    if (typeof callback == "function") {
      callback(soundAsyncTemp);
    }
  }

  const onPauseSound = async () => {
    await sound.pauseAsync();
  };

  // const setSoundCurrent = () => {
  //   console.log('hell0!!')

  //   sound = soundAsync;

  // }

  // useEffect(() => {
  //     console.log('soundCurrent UseEffect: ',sound )
  //     console.log('soundAsyn UseEffect : ', soundAsync)
  //   if (!sound && soundAsync) {
  //     setSoundCurrent()
  //   }
  // }, [soundAsync]);

  useEffect(() => {
    if (dataPlaySongs.length > 0) {
     
      createSound(dataPlaySongs, storeIndexSong, (newSound) => {
        newSound.playAsync();
        dispatch(isPlayingSound(true));
        if (storeIndexSong) {
          dispatch(indexSong(storeIndexSong));
        }
      });
    }

    // return () => {
    //   console.log('heloo 111')
      
    //     console.log('hello 2')
    //     sound.pauseAsync()
    //     sound.unloadAsync()
    // }
   }, []);

  useEffect(() => {
    if (sound) {
    sound.pauseAsync()
    sound.unloadAsync()
  }
  }, [statusShowHide]);

  const onHandlerNext = () => {
    if (storeIndexSong >= dataPlaySongs.length - 1) {
      return;
    }
    if (sound) {
      sound.unloadAsync();
    }

    dispatch(indexSong(storeIndexSong + 1));
    createSound(dataPlaySongs, storeIndexSong + 1, (newSound) => {
      newSound.playAsync();
    });

    dispatch(isPlayingSound(true));
  };

  const onHandlerBack = () => {
    if (storeIndexSong <= 0) {
      return;
    }
    if (sound) {
      sound.unloadAsync();
    }

    dispatch(indexSong(storeIndexSong - 1));
    createSound(dataPlaySongs, storeIndexSong - 1, (newSound) => {
      newSound.playAsync();
    });

    dispatch(isPlayingSound(true));
  };

  const onPlaySound = async () => {
    if (dataPlaySongs.length > 0) {
      if (statusPlayingSound) {
        onPauseSound();
      } else {
        if (sound) {
          await sound.playAsync();
        } else {
          createSound(dataPlaySongs, storeIndexSong, (newSound) => {
            newSound.playAsync();
          });
        }
      }
    }

    dispatch(isPlayingSound(!statusPlayingSound));
  };

  useEffect(() => {
    if (sound && statusPlayingSound && !statusSliding) {
      let interval = setInterval(() => {
        sound.setOnPlaybackStatusUpdate((result) => {
          dispatch(setDurationSound(result.durationMillis));
          dispatch(setPositionSound(result.positionMillis));
          if (result.didJustFinish) {
            if (result.isLooping) {
              return;
            }

            if (storeIndexSong < dataPlaySongs.length - 1) {
              dispatch(isPlayingSound(false));
              dispatch(indexSong(storeIndexSong + 1));
              dispatch(setPositionSound(0));
              createSound(dataPlaySongs, storeIndexSong + 1, (newSound) => {
                newSound.playAsync();
              });
              dispatch(isPlayingSound(true));
            } else {
              dispatch(setPositionSound(0));
              dispatch(isPlayingSound(false));
            }
          }
        });
      }, 500);
      return () => {
        clearInterval(interval);
        interval = 0;
      };
    }
  }, [sound, statusPlayingSound, statusSliding]);

  const gotoPosition = (pos) => {
    const checkPlaying = statusPlayingSound;

    if (statusPlayingSound) {
      dispatch(isPlayingSound(false));
    }

    dispatch(setPositionSound(pos));

    if (checkPlaying) {
      sound.playFromPositionAsync(pos);
      dispatch(isPlayingSound(true));
    } else {
      sound.setPositionAsync(pos);
    }
    dispatch(setSliding(false));
  };

  const onHandlerRepeat = () => {
    dispatch(setRepeat(!statusRepeat));

    sound.setIsLoopingAsync(!statusRepeat);
  };

  //   const onHanderBack = () => {
  //     dispatch(setShowHide(true));
  //     dispatch(setPositionSound(getPositionSound));
  //     dispatch(setDurationSound(getDurationSound));
  //     props.navigation.navigate("TabsNavigation");
  //   };

  return [
    gotoPosition,
    onHandlerNext,
    onHandlerBack,
    onPlaySound,
    onHandlerRepeat,
  ];
}
