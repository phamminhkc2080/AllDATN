import {
  GET_TOP_SONGS,
  GET_RECOMMENDED_SONGS,
  DATA_PLAY_SONGS,
  GET_SONG_OF_CATEGORY,
  GET_SONG_INDEX,
  GET_SONG_ARTISTS,
  GET_SONG_SEARCH,
} from "../constants/types";

const dataTopSongs = [];
const dataRecommendedSongs = [];
const dataPlaySong = [];
const dataSongOfCategory = [];
const indexSong = "";
const dataSongsArtist = [];
const dataSongsSearch = [];

export const reducerTopSong = (state = dataTopSongs, action) => {
  switch (action.type) {
    case GET_TOP_SONGS:
      return action.payload;
    default:
      return state;
  }
};

export const reducerRecommenedSongs = (
  state = dataRecommendedSongs,
  action
) => {
  switch (action.type) {
    case GET_RECOMMENDED_SONGS:
      return action.payload;
    default:
      return state;
  }
};

export const reducerPlaySongs = (state = dataPlaySong, action) => {
  switch (action.type) {
    case DATA_PLAY_SONGS:
      console.log('action.payload = ', action.payload)
      return action.payload;
    default:
      return state;
  }
};

export const reducerSongofCategory = (state = dataSongOfCategory, action) => {
  switch (action.type) {
    case GET_SONG_OF_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export const reducerIndexSong = (state = indexSong, action) => {
  switch (action.type) {
    case GET_SONG_INDEX:
      return action.payload;
    default:
      return state;
  }
};

export const reducerSongsArtists = (state = dataSongsArtist, action) => {
  switch (action.type) {
    case GET_SONG_ARTISTS:
      return action.payload;
    default:
      return state;
  }
};

export const reducerSongsSearch = (state = dataSongsSearch, action) => {
  switch (action.type) {
    case GET_SONG_SEARCH:
      return action.payload;
    default:
      return state;
  }
};


