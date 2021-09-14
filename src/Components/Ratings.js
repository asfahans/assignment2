import React from 'react';

const Ratings = ({ ratings }) => {
  return (
    <>
      {/* This can be done is a more efficient way */}
      {ratings === 5 ? (
        <>
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
        </>
      ) : ratings === 4 ? (
        <>
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
        </>
      ) : ratings === 3 ? (
        <>
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
        </>
      ) : ratings === 2 ? (
        <>
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
        </>
      ) : (
        <>
          <img
            src='https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png'
            height='25px'
            alt='Ratings'
          />
        </>
      )}
    </>
  );
};

export default Ratings;
