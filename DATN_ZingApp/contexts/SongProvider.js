import { Audio } from "expo-av";
import { useState, useEffect } from "react";
import { SongContext } from "./SongContext";

const SongProvider = ({ children }) => {
  const [song, setSong] = useState();
  const [songs, setSongs] = useState([]);
  const [index, setIndex] = useState(0);
  const [isShow, setShow] = useState(false);

  // const [songsArtists, setSongsArtists] = useState([]);
  const [artistsSongs, setArtistsSongs] = useState([]);
  const [trendingSongs, setTrendingSongs] = useState([]);
  const [categorySongs, setCategorySongs] = useState([]);
  const [searchSongs, setSearchSongs] = useState([]);
  const [songPlayList,setSongPlaylist]= useState([]);

  // artistsSongs

  const [isRepeat, setRepeat] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [isSliding, setSliding] = useState(false);
  const [position, setPosition] = useState(false);
  const [duration, setDuration] = useState(false);

  const [screenName, setScreenName] = useState();
  const [isNewPlayList, setNewPlayList] = useState(false);

  async function createSound(callback, newIndex) {
    console.log("newIndex : ", newIndex);
    const { sound: soundAsyncTemp } = await Audio.Sound.createAsync({
      uri: `https://application-mock-server.loca.lt/${
        songs[typeof newIndex !== "undefined" ? newIndex : index].dir
      }`,
    });
    soundAsyncTemp.setVolumeAsync(0.2);
    setSong(soundAsyncTemp);
    console.log("indextCreateSound : ", index);
    if (typeof callback == "function") {
      callback(soundAsyncTemp);
    }
  }

  const onPauseSound = async () => {
    return await song?.pauseAsync();
  };

  const createThenPlay = (newIndex) => {
    if (typeof newIndex !== "undefined") {
      setIndex(newIndex);
    }
    createSound((newSong) => {
      newSong.playAsync();
      setPlaying(true);
    }, newIndex);
  };

  const onHandlerNext = () => {
    if (index >= songs.length - 1) {
      return;
    }
    if (song) {
      song.unloadAsync();
    }

    createThenPlay(index + 1);
  };

  const onHandlerBack = () => {
    if (index <= 0) {
      return;
    }
    if (song) {
      song.unloadAsync();
    }

    createThenPlay(index - 1);
  };

  const onPlaySound = async () => {
    if (songs.length > 0) {
      if (isPlaying) {
        onPauseSound();
      } else {
        if (song) {
          await song.playAsync();
        } else {
          createThenPlay();
        }
      }
    }

    setPlaying((x) => !x);
  };

  // useEffect(() => {
  //   if (songs.length > 0) {
  //     createSound((newSong) => {
  //       newSong.playAsync();
  //       setPlaying(true);
  //     });
  //   }
  // }, []);

  useEffect(() => {
    console.log("song : ", song);

    if (song && isPlaying && !isSliding) {
      console.log("hello!!");
      let interval = setInterval(() => {
        song.setOnPlaybackStatusUpdate((result) => {
          setDuration(result.durationMillis);
          setPosition(result.positionMillis);
          if (result.didJustFinish) {
            if (result.isLooping) {
              return;
            }
            console.log("index : ", index);
            if (index < songs.length - 1) {
              setPlaying(false);
              setPosition(0);
              createThenPlay(index + 1);
              setPlaying(true);
            } else {
              console.log("WoW!!");
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

  const playSongs = () => {
    if (songs.length > 0) {
      if (!song) {
        console.log("song creating...");
        createThenPlay(index);
      } else {
        song?.getStatusAsync().then((response) => {
          if (response?.isLoaded) {
            song.stopAsync().then(() =>
              song.unloadAsync().then(() => {
                createThenPlay(index);
                console.log('helloooo')

                // Audio.Sound.createAsync({
                //   uri: `https://application-mock-server.loca.lt/${songs[index].dir}`,
                // })
                //   .then((response) => {
                //     response.sound?.setVolumeAsync(0.2);
                //     console.log("responSound : ", response.sound);
                //     setSong(response.sound);

                //     console.log("setPlaying(true)");
                //     setPlaying(true);
                //   });
              })
            );
          }
        });
      }
    }
  };

  useEffect(() => {
    playSongs();
  }, [songs, index]);

  const gotoPosition = (pos) => {
    if (isPlaying) {
      setPlaying(false);
    }

    setPosition(pos);

    if (isPlaying) {
      song.playFromPositionAsync(pos);
      setPlaying(true);
    } else {
      song.setPositionAsync(pos);
    }
    setSliding(false);
  };

  const onHandlerRepeat = () => {
    // dispatch(setRepeat(!isRepeat));
    setRepeat((x) => !x);

    song.setIsLoopingAsync(!isRepeat);
  };

  // const handlerGetData = () => {

  //   if (screenName === "TrendingSongs") {
  //     // dispatch(getDataPlaySongs(dataSongCategory));
  //     setSongs(trendingSongs);
  //   } else if (screenName === "ArtistsDetail") {
  //     // dispatch(getDataPlaySongs(dataSongArtists));
  //     setSongs(artistsSongs);
  //   } else if (screenName === "ResultSearch") {
  //     // dispatch(getDataPlaySongs(dataSongsSearch));

  //     setSongs(searchSongs);
  //     // console.log('[searchSongs[indexSong]] : ', searchSongs[indexSong])
  //   }
  //   if (screenName === "CatgoriesDetails") {
  //     // dispatch(getDataPlaySongs(dataSongCategory));
  //     setSongs(categorySongs);
  //     // console.log('songsSong : ', songs)
  //   }
  // };
  // useEffect(() => {
  //   if(isNewPlayList){
  //     console.log('screenName = ', screenName)
  //     handlerGetData();
  //   }

  // }, [screenName]);
  // useEffect(() => {
  //   if (!isShow) {
  //     setNewPlayList(false);
  //   }
  // }, [isShow]);

  return (
    <SongContext.Provider
      value={{
        song,
        songs,
        artistsSongs,
        trendingSongs,
        categorySongs,
        screenName,
        searchSongs,
        songPlayList,

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

          setScreenName,
          setNewPlayList,
          setSongPlaylist,

          setArtistsSongs,
          setTrendingSongs,
          setCategorySongs,
          setSearchSongs,

          onHandlerBack,
          onHandlerNext,
          onHandlerRepeat,
          onPauseSound,
          onPlaySound,
          gotoPosition,
          createSound,
        },
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongProvider;
