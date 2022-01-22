import React from 'react';

const Movie = ({item}) => {

  return (
    <div className="movie">
      <div className="movie-title">{item.title}</div>
      <div className="movie-year">{item.year}</div>
    </div>
  );
};


export default Movie;
