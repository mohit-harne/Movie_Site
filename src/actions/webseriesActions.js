// actions/webseriesActions.js
import axios from 'axios'; // Import Axios

export const SEARCH_WEBSERIES_REQUEST = 'SEARCH_WEBSERIES_REQUEST';
export const SEARCH_WEBSERIES_SUCCESS = 'SEARCH_WEBSERIES_SUCCESS';
export const SEARCH_WEBSERIES_FAILURE = 'SEARCH_WEBSERIES_FAILURE';

export const fetchWebseriesRequest = () => ({
  type: SEARCH_WEBSERIES_REQUEST
});

export const fetchWebseriesSuccess = (webseries) => ({
  type: SEARCH_WEBSERIES_SUCCESS,
  payload: webseries
});

export const fetchWebseriesFailure = (error) => ({
  type: SEARCH_WEBSERIES_FAILURE,
  payload: error
});

export const fetchWebseries = (searchQuery) => async (dispatch) => {
  dispatch(fetchWebseriesRequest());
  let url;
  if (searchQuery.trim() === '') {
    url = 'http://www.omdbapi.com/?s=iron&type=series&apikey=1c3410d';
  } else {
    url = `http://www.omdbapi.com/?s=${searchQuery}&type=series&apikey=1c3410d`;
  }
  try {
    const response = await axios.get(url);
    const data = response.data;
    if (data.Response === 'True') {
      dispatch(fetchWebseriesSuccess(data.Search));
    } else {
      dispatch(fetchWebseriesFailure(data.Error));
    }
  } catch (error) {
    dispatch(fetchWebseriesFailure(error.message));
  }
};
