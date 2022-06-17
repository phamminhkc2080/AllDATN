import { DURATION_SOUND, IS_PLAYING_SOUND, IS_REPEAT, IS_SLIDING, POSITION_SOUND, SET_SHOW_HIDE, SOUND } from "../constants/types";

const isShowHide = false;
const isPlaying = false;
const duration = 0;
const position = 0;
const isRepeat = false;
const isSliding = false;
const sound = '';

export const reducerSetShowHide = (state = isShowHide, action) => {
  switch (action.type) {
    case SET_SHOW_HIDE:
      return action.payload;
    default:
      return state;
  }
};

export const reducerPositionSound = (state = position, action) => {
    switch (action.type) {
      case POSITION_SOUND:
        return action.payload;
      default:
        return state;
    }
  };

  export const reducerDurationSound = (state = duration, action) => {
    switch (action.type) {
      case DURATION_SOUND:
        return action.payload;
      default:
        return state;
    }
  };

  export const reducerIsPlayingSound = (state = isPlaying, action) => {
    switch (action.type) {
      case IS_PLAYING_SOUND:
        return action.payload;
      default:
        return state;
    }
  };

  export const reducerSound = (state = sound, action) => {
    switch (action.type) {
      case SOUND:
        return action.payload;
      default:
        return state;
    }
  };
  export const reducerIsSliding = (state = isSliding, action) => {
    switch (action.type) {
      case IS_SLIDING:
        return action.payload;
      default:
        return state;
    }
  };
  export const reducerIsRepeat = (state = isRepeat, action) => {
    switch (action.type) {
      case IS_REPEAT:
        return action.payload;
      default:
        return state;
    }
  };
 
