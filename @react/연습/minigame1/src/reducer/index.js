import { combineReducers } from "redux";
import { gameSlice } from "./todo";


export const rootReducer = combineReducers({ game: gameSlice.reducer });