import { GET_TOP_ARTISTS } from "../constants/types";

const dataTopArtists = [];

export const reducerTopArtists = (state = dataTopArtists, action) => {
  switch (action.type) {
    case GET_TOP_ARTISTS:
      return action.payload;
    default:
      return state;
  }
};


