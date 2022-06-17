import { SIGN_IN } from "../constants/types";

const dataTopArtists = 
{isSigin:false,
    dataUser:[]};

export const reducerTopArtists = (state = dataTopArtists, action) => {
  switch (action.type) {
    case SIGN_IN:
      return action.payload;
    default:
      return state;
  }
};


