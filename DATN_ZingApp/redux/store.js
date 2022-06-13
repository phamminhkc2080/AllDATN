import { configureStore } from "@reduxjs/toolkit";
import { reducerTopArtists } from "./reducers/artists";
import { reducerCategories } from "./reducers/categories";
import { reducerIndexSong, reducerPlaySongs, reducerRecommenedSongs, reducerSongofCategory, reducerSongsArtists, reducerSongsSearch, reducerTopSong } from "./reducers/songs";

const rootReducer = {
    dataTopSongs :  reducerTopSong ,
    dataRecommendedSongs:reducerRecommenedSongs,
    dataTopArtists:reducerTopArtists,
    dataCategories:reducerCategories,
    dataPlaySongs : reducerPlaySongs,
    dataSongCategory : reducerSongofCategory,
    storeIndexSong : reducerIndexSong,
    dataSongArtists:reducerSongsArtists,
    dataSongsSearch:reducerSongsSearch
}
export const store = configureStore({reducer : rootReducer});
