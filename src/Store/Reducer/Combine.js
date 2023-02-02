import { combineReducers } from "redux";
import FavoriteReducer from "./FavoriteReducer";
import MovieReducer from "./MoviesReducer";


export default combineReducers({

    favoriteStore: FavoriteReducer,
    ListStore: MovieReducer

});
