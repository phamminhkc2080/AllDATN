import { configureStore } from "@reduxjs/toolkit";
import { reducerTopArtists } from "./reducers/artists";
import { reducerCategories } from "./reducers/categories";
import { reducerPlaySongs, reducerRecommenedSongs, reducerSongofCategory, reducerTopSong } from "./reducers/songs";

const rootReducer = {
    dataTopSongs :  reducerTopSong ,
    dataRecommendedSongs:reducerRecommenedSongs,
    dataTopArtists:reducerTopArtists,
    dataCategories:reducerCategories,
    dataPlaySongs : reducerPlaySongs,
    dataSongOfCategory : reducerSongofCategory
}
export const store = configureStore({reducer : rootReducer});
