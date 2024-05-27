import React from 'react';
import MovieList from './movielist';

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-[-100px] bg-blue-950 text-white  gap-4">
      
    <MovieList />
  </div>
  )
}

export default Home