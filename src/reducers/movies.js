// reducers/movies.js

import { FETCH_MOVIES_SUCCESS } from '../actions';

const initialState = {
  movies: []
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
