// reducers/webseriesReducer.js

import {
    SEARCH_WEBSERIES_REQUEST,
    SEARCH_WEBSERIES_SUCCESS,
    SEARCH_WEBSERIES_FAILURE
  } from '../actions/webseriesActions';
  
  const initialState = {
    webseries: [],
    loading: false,
    error: ''
  };
  
  const webseriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_WEBSERIES_REQUEST:
        return {
          ...state,
          loading: true,
          error: '' // Clear any previous errors
        };
      case SEARCH_WEBSERIES_SUCCESS:
        return {
          ...state,
          loading: false,
          webseries: action.payload,
          error: '' // Clear any previous errors
        };
      case SEARCH_WEBSERIES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default webseriesReducer;
  