import { Audio } from "expo-av";
import { useState, useEffect } from "react";
import { SongContext } from "./SongContext";

const SongProvider = ({ children }) => {
  const [song, setSong] = useState();
  const [songs, setSongs] = useState([]);
  const [index, setIndex] = useState(0);
  const [isShow, setShow] = useState(false);

  const [isRepeat, setRepeat] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [isSliding, setSliding] = useState(false);
  const [position, setPosition] = useState(false);
  const [duration, setDuration] = useState(false);

  async function createSound(callback) {
    const { sound: soundAsyncTemp } = await Audio.Sound.createAsync({
      uri: `http://192.168.1.4:8000/${songs[index].dir}`,
    });

    setSong(soundAsyncTemp);

    if (typeof callback == "function") {
      callback(soundAsyncTemp);
    }
  }

  const onPauseSound = async () => {
    await song?.pauseAsync();
  };

  useEffect(() => {
    if (songs.length > 0) {
      createSound((newSong) => {
        newSong.playAsync();
        setPlaying(true);
      });
    }
  }, []);

  const onHandlerNext = () => {
    if (index >= songs.length - 1) {
      return;
    }
    if (song) {
      song.unloadAsync();
    }

    setIndex((i) => i + 1);
    createSound((newSong) => {
      newSong.playAsync();
    });
    setPlaying(true);
  };

  const onHandlerBack = () => {
    if (index <= 0) {
      return;
    }
    if (song) {
      song.unloadAsync();
    }

    setIndex((i) => i - 1);
    createSound((newSong) => {
      newSong.playAsync();
    });

    setPlaying(true);
  };

  const onPlaySound = async () => {
    if (songs.length > 0) {
      console.log("isPlaying : ", isPlaying);
      if (isPlaying) {
        onPauseSound();
      } else {
        if (song) {
          await song.playAsync();
        } else {
          createSound((newSong) => {
            newSong.playAsync();
          });
        }
      }
    }

    setPlaying((x) => !x);
  };

  useEffect(() => {
    if (song && isPlaying && !isSliding) {
      let interval = setInterval(() => {
        song.setOnPlaybackStatusUpdate((result) => {
          setDuration(result.durationMillis);
          setPosition(result.positionMillis);
          if (result.didJustFinish) {
            if (result.isLooping) {
              return;
            }

            // if (index < songs.length - 1) {
            //   dispatch(isPlayingSound(false));
            //   dispatch(indexSong(index + 1));
            //   dispatch(setPositionSound(0));
            //   createSound(songs, index + 1, (newSong) => {
            //     newSong.playAsync();
            //   });
            //   dispatch(isPlayingSound(true));
            // } else {
            //   dispatch(setPositionSound(0));
            //   dispatch(isPlayingSound(false));
            // }

            if (index < songs.length - 1) {
              setPlaying(false);
              setIndex((i) => i++);
              setPosition(0);
              createSound((newSong) => newSong.playAsync());
              setPlaying(true);
            } else {
              setPosition(0);
              setPlaying(false);
            }
          }
        });
      }, 500);
      return () => {
        clearInterval(interval);
        interval = 0;
      };
    }
  }, [song, isPlaying, isSliding]);

  const gotoPosition = (pos) => {
    //const checkPlaying = isPlaying;

    if (isPlaying) {
      // dispatch(isPlayingSound(false));
      setPlaying(false);
    }

    //dispatch(setPositionSound(pos));
    setPosition(pos);

    if (isPlaying) {
      song.playFromPositionAsync(pos);
      // dispatch(isPlayingSound(true));
      setPlaying(true);
    } else {
      song.setPositionAsync(pos);
    }
    // dispatch(setSliding(false));
    setSliding(false);
  };

  const onHandlerRepeat = () => {
    // dispatch(setRepeat(!isRepeat));
    setRepeat((x) => !x);

    song.setIsLoopingAsync(!isRepeat);
  };

  console.log("index =", index);
  console.log("songs =", songs);

  return (
    <SongContext.Provider
      value={{
        song,
        songs,
        songControl: {
          index,
          isRepeat,
          isShow,
          isPlaying,
          isSliding,
          position,
          duration,

          setPlaying,
          setSliding,
          setPosition,
          setDuration,

          setSong,
          setSongs,
          setIndex,
          setShow,
          setRepeat,

          onHandlerBack,
          onHandlerNext,
          onHandlerRepeat,
          onPauseSound,
          onPlaySound,
          gotoPosition,
        },
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongProvider;
