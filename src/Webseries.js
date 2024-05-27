// Webseries.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWebseriesRequest, fetchWebseriesSuccess, fetchWebseriesFailure } from './actions/webseriesActions';
import WebseriesSearchBar from './WebseriesSearchBar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Webseries = () => {
  const dispatch = useDispatch();
  const { webseries, loading, error } = useSelector(state => state.webseries);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchWebseriesRequest());
        let url;
        if (searchQuery.trim() === '') {
          url = `https://www.omdbapi.com/?s=iron&type=series&apikey=1c3410d&page=${currentPage}`;
        } else {
          url = `https://www.omdbapi.com/?s=${searchQuery}&type=series&apikey=1c3410d&page=${currentPage}`;
        }
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

    fetchData();
  }, [dispatch, searchQuery, currentPage]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset current page when performing a new search
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1); // Increment current page to fetch more results
  };

  return (
    <div className="container mx-auto bg-blue-950">
      
      <WebseriesSearchBar onSearch={handleSearch} /> <br/>
      <h1 className='text-2xl font-semibold text-white pl-10 tracking-wider'>Trending</h1> <br/>
      {loading ? (
        <p className="text-center text-4xl text-white">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-white px-6">
          {webseries.map((series, index) => (
            <div key={series.imdbID || index} className=" p-4 rounded-lg hover:scale-110 transition-all">
              <Link to={`/webseries/${series.imdbID}`} className="block">
                
                {series.Poster && (
                  <img src={series.Poster} alt='Webseries Poster' className="w-full h-auto rounded-lg" />
                )}
                <h2 className="text-lg font-semibold mb-2">{series.Title}</h2>
                <p className="mb-2">Year: {series.Year}</p>
              </Link>
            </div>
          ))}
          <div className="grid justify-center w-screen ">
            <button onClick={handleLoadMore} className="mt-4  py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Load More</button>
          </div> 
        </div>
      )}<br/><br/>
    </div>
  );
};

export default Webseries;
