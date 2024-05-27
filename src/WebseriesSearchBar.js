// WebseriesSearchBar.js

import React, { useState } from 'react';
import familyman from './images/familyman.gif'

const WebseriesSearchBar = ({ onSearch, setFilteredWebseries }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    const input = event.target.value;
    setQuery(input);
    onSearch(input);
  };

  return (
    <div className='text-white   justify-center grid overflow-hidden h-[620px] '>
    <img className='w-[1600px] ' src={familyman} alt='M'/>
    <div className=' mt-[-600px] '>
    <h1 className='text-center text-7xl font-extrabold drop-shadow-2xl shadow-black'>Welcome</h1>
    <h1 className='text-center text-3xl font-bold drop-shadow-2xl shadow-black'>The Ultimate Destination for Movie Lovers. Explore More..</h1><br/>
    
    <form className="mb-4">
      <input
        type="text"
        placeholder="Search webseries..."
        value={query}
        onChange={handleInputChange}
        className=" px-4 py-4 rounded-full w-[50%] ml-[380px]  text-black focus:outline-none focus:ring focus:border-blue-300"
      />
    </form>
    <div className='w-full h-[100px] bg-gradient-to-t from-blue-950 to-transparent mt-[76px]'>&nbsp;</div>
    </div>
    </div> 
  );
};

export default WebseriesSearchBar;
