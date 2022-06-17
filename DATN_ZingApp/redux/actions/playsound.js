import {
  DURATION_SOUND,
  IS_PLAYING_SOUND,
  IS_REPEAT,
  IS_SLIDING,
  POSITION_SOUND,
  SET_SHOW_HIDE,
  SOUND,
} from "../constants/types";

export const setShowHide = (status) => {
  return {
    type: SET_SHOW_HIDE,
    payload: status,
  };
};

export const setDurationSound = (duration) => {
  return {
    type: DURATION_SOUND,
    payload: duration,
  };
};

export const setPositionSound = (position) => {
  return {
    type: POSITION_SOUND,
    payload: position,
  };
};

export const isPlayingSound = (isplaying) => {
  return {
    type: IS_PLAYING_SOUND,
    payload: isplaying,
  };
};

export const soundaction = (sound) => {
  return {
    type: SOUND,
    payload: sound,
  };
};
export const setSliding = (sliding) => {
  return {
    type: IS_SLIDING,
    payload: sliding,
  };
};
export const setRepeat = (repeat) => {
  return {
    type: IS_REPEAT,
    payload: repeat,
  };
};
