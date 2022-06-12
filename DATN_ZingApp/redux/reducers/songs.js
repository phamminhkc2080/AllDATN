import { GET_TOP_SONGS,GET_RECOMMENDED_SONGS, DATAPLAYSONGS, GET_SONG_OF_CATEGORY } from "../constants/types";

const dataTopSongs = [];
const dataRecommendedSongs=[];
const dataPlaySong =[];
const dataSongOfCategory =[];

export const reducerTopSong = (state = dataTopSongs, action) => {
  switch (action.type) {
    case GET_TOP_SONGS:
      return action.payload;
    default:
      return state;
  }
};

export const reducerRecommenedSongs = (state = dataRecommendedSongs, action) => {
  switch (action.type) {
    case GET_RECOMMENDED_SONGS:
      return action.payload;
    default:
      return state;
  }
};

export const reducerPlaySongs = (state = dataPlaySong, action) => {
  switch (action.type) {
    case DATAPLAYSONGS:
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

