// MovieList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from './actions';
import MovieSearchBar from './MovieSearchBar';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleSearch = query => {
    setLoading(true); // Set loading state to true
    const filtered = movies.filter(movie =>
      movie.Title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
    setLoading(false); // Set loading state to false when search is completed
  };
  

  return (
    <div className="container mx-auto">
      
      <MovieSearchBar onSearch={handleSearch} setFilteredMovies={setFilteredMovies} /> <br/>
      <h1 className='text-2xl font-semibold text-white pl-10 tracking-wider'>Trending</h1> <br/>
      {loading ? ( // Display loading text if loading state is true
        <p className="text-center text-white text-4xl mt-[100px}">Loading...</p>
        
      ) : (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 px-6">
          
          {(filteredMovies.length ? filteredMovies : movies).map((movie, index) => (
            <div key={movie.imdbID || index} className=" p-4 rounded-lg hover:scale-110 transition-all">
              <Link to={`/movie/${movie.imdbID}`} className="block">
                
                {movie.Poster && (
                  <img src={movie.Poster} alt='Movie Poster' className="w-full h-auto rounded-lg" />
                )} <br/>
                <h2 className="text-lg font-semibold mb-2">{movie.Title}</h2>
                
                <p className="mb-2">Year: {movie.Year}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
