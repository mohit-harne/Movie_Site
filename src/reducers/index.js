import webseriesReducer from './webseriesReducer';
import { combineReducers } from 'redux';
import moviesReducer from "./movies";
const rootReducer = combineReducers({
    
    movies: moviesReducer ,
    webseries: webseriesReducer
});

export default rootReducer;