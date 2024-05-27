import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Similarmovie from './similarmovie';
import progress from './images/progress.png'
import playbutton from './images/playbutton.png'
import deadpool from './videos/deadpool.mp4'
import monkey from './videos/monkey.mp4'
import moana from './videos/moana.mp4'
import open from './videos/open.mp4'
const MovieDetails = () => {

  
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=1c3410d`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();

    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, [id]);

  if (loading) {
    return <div className='bg-blue-950 h-fit'><p className='text-8xl text-center text-white'>Loading...</p></div> ;
  }

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className='pt-[100px] bg-blue-950 text-white'>
      <div className='grid grid-flow-col gap-24 justify-center'>
      <img src={movie.Poster} alt='Movie Poster' className="w-full h-auto rounded-lg" />
        <div className='w-[800px] leading-[28px]'>
      <p className='text-5xl font-bold tracking-wider'> {movie.Title}</p> <br/>
      <div className='grid grid-flow-col w-fit gap-10 items-center'>
        <img className='h-[80px] w-[80px] cursor-pointer hover:scale-105 transition-all' src={progress} alt='M'/>
        <img className='h-[80px] w-[80px] invert cursor-pointer hover:scale-105 transition-all' src={playbutton} alt='M'/>
        <h1 className='text-xl font-semibold cursor-pointer'>Watch Trailer</h1>
      </div> <br/>
      <p className='text-lg leading-[35px] font-semibold'> <span className='text-3xl font-bold tracking-wider'>Overview </span> <br/> {movie.Plot}</p><br/>
   <div className='grid grid-flow-row grid-cols-2 gap-2'>   <p><span className='text-lg font-semibold tracking-wider'> Year: </span>  {movie.Year}</p>
      <p><span className='text-lg font-semibold tracking-wider'>Rated :  </span>{movie.Rated}</p>
      <p><span className='text-lg font-semibold tracking-wider'> Runtime : </span> {movie.Runtime}</p>
      <p><span className='text-lg font-semibold tracking-wider'> Genre :</span> {movie.Genre}</p>
      <p><span className='text-lg font-semibold tracking-wider'> Director : </span> {movie.Director}</p>
      <p><span className='text-lg font-semibold tracking-wider'> Cast : </span> {movie.Actors}</p>
      <p><span className='text-lg font-semibold tracking-wider'> IMDb Rating : </span> {movie.imdbRating}</p>
      </div>
      </div>
      </div>
      <div><br/><br/>
        <h1 className='text-2xl font-semibold text-white pl-10 tracking-wider'>Official Videos</h1>
        <div className='grid grid-flow-col justify-center gap-12'>
        <video src={deadpool} controls autoPlay loop muted  className='h-[300px] w-[300px] rounded-lg' />
  <video src={open} controls autoPlay loop muted className='h-[300px] w-[300px] rounded-lg' />
  <video src={moana} controls autoPlay loop muted className='h-[300px] w-[300px] rounded-lg' />
  <video src={monkey} controls autoPlay loop muted className='h-[300px] w-[300px] rounded-lg' />
</div>
      </div>
      <Similarmovie/>
    </div>
  );
}

export default MovieDetails;
