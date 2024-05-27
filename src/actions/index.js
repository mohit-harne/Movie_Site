import axios from 'axios';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error
  };
};

export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(fetchMoviesRequest());
    try {
      const response = await axios.get('http://www.omdbapi.com/?s=marvel&apikey=1c3410d');
      const movies = response.data.Search || [];
      dispatch(fetchMoviesSuccess(movies));
      return movies; // Return the movies for chaining 'then' method
    } catch (error) {
      const errorMessage = error.message;
      dispatch(fetchMoviesFailure(errorMessage));
      throw error; // Throw the error for chaining 'catch' method
    }
  };
};
