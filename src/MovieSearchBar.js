// MovieSearchBar.js

import React, { useState } from 'react';
import axios from 'axios';
import mummies from './images/mummies.jpg'

const MovieSearchBar = ({ onSearch, setFilteredMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('Submitting search...', query);
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=1c3410d`);
      const searchData = response.data.Search || [];
      console.log('Search results:', searchData);
      onSearch(query);
      setFilteredMovies(searchData); // Ensure setFilteredMovies is called with the search results
    } catch (error) {
      console.error('Error searching movies:', error);
      setFilteredMovies([]); // Reset filtered movies if there's an error
    }
  };

  return (
    <div className='text-gray-50 mt-[80px]  justify-center grid overflow-hidden h-[620px] '>
      <img className='w-[1600px] ' src={mummies} alt='M'/>
      <div className=' mt-[-600px] '>
      <h1 className='text-center text-7xl font-extrabold drop-shadow-md shadow-black'>Welcome</h1>
      <h1 className='text-center text-3xl font-bold drop-shadow-md shadow-black'>The Ultimate Destination for Movie Lovers. Explore More..</h1><br/>
      <button type="submit" className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-10 py-[16.2px] font-bold rounded-r-full ml-[1010px] absolute mt-[0.6px]">
        Search
      </button>
    <form onSubmit={handleSubmit} className="mb-4  ">
      <input
        type="text"
        placeholder="Search for movies or TV shows"
        value={query}
        onChange={handleInputChange}
        className=" px-4 py-4 rounded-full w-[50%] ml-[380px]  text-black focus:outline-none focus:ring focus:border-blue-300"
    
      />
     
    </form>
    <div className='w-full h-[100px] bg-gradient-to-t from-blue-950 to-transparent mt-[75px]'>&nbsp;</div>
    </div>
    </div> 
  );
};

export default MovieSearchBar;
