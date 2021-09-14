import React from 'react';
import Moviecard from '../Components/Moviecard';
import movies from '../data/movieList.json';

const Moviescreen = () => {
  return (
    <div className='wrapper-flex'>
      {movies &&
        movies.map((movie) => <Moviecard movie={movie} key={movie.id} />)}
    </div>
  );
};

export default Moviescreen;
