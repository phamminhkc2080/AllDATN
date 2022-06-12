import {  GET_TOP_SONGS,GET_RECOMMENDED_SONGS,DATAPLAYSONGS,GET_SONG_OF_CATEGORY } from "../constants/types"


export const gettopsongs = dataTopSong => {
  return {
    type: GET_TOP_SONGS,
    payload: dataTopSong
  }
}

export const getcommanedsongs = dataRecommenedSong => {
  return {
    type: GET_RECOMMENDED_SONGS,
    payload: dataRecommenedSong
  }
}

export const dataplaysongs = dataplaysongs => {
  // console.log('dataAc : ', dataplaysongs);
  return {
    type: DATAPLAYSONGS,
    payload: dataplaysongs
  }
}

export const dataSongsOfCategory = datasongsofcategory => {
  // console.log('dataAc : ', dataplaysongs);
  return {
    type: GET_SONG_OF_CATEGORY,
    payload: datasongsofcategory
  }
}


