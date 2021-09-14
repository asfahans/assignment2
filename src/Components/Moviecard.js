import React from 'react';
import Ratings from './Ratings';
import './moviecard.css';

const Moviecard = ({ movie }) => {
  return (
    <div className='moviecard-container'>
      <img src={movie.image} width='300px' alt={movie.title} />
      <h1>{movie.title}</h1>
      <h2>{movie.subtitle}</h2>
      <p>{movie.description}</p>
      <Ratings ratings={movie.rating} />
    </div>
  );
};

export default Moviecard;
