import React from 'react';

const Movie = ({item, removeMovie}) => {

  return (
    <div className="movie">
      <div className="movie-title">
        {item.title}
        <span className="movie-year">{item.year}</span>
      </div>
      <div>
        <button onClick={() => removeMovie(item.id)}>DEL</button>
      </div>
    </div>

  );
};


export default Movie;
