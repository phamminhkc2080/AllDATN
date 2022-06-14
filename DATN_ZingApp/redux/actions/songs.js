import {
  GET_TOP_SONGS,
  GET_RECOMMENDED_SONGS,
  DATA_PLAY_SONGS,
  GET_SONG_OF_CATEGORY,
  GET_SONG_INDEX,
  GET_SONG_ARTISTS,
  GET_SONG_SEARCH,
  SET_SHOW_HIDE
} from "../constants/types";

export const gettopsongs = (dataTopSong) => {
  return {
    type: GET_TOP_SONGS,
    payload: dataTopSong,
  };
};

export const getcommanedsongs = (dataRecommenedSong) => {
  return {
    type: GET_RECOMMENDED_SONGS,
    payload: dataRecommenedSong,
  };
};

export const getDataPlaySongs = (dataPlaySongs) => {
  return {
    type: DATA_PLAY_SONGS,
    payload: dataPlaySongs,
  };
};

export const dataSongsOfCategory = (datasongsofcategory) => {
  return {
    type: GET_SONG_OF_CATEGORY,
    payload: datasongsofcategory,
  };
};

export const indexSong = (index) => {
  return {
    type: GET_SONG_INDEX,
    payload: index,
  };
};

export const getSongArtists = (dataSongArtists) => {
  return {
    type: GET_SONG_ARTISTS,
    payload: dataSongArtists,
  };
};

export const getSongSearch = (songSearch) => {
  return {
    type: GET_SONG_SEARCH,
    payload: songSearch,
  };
};



