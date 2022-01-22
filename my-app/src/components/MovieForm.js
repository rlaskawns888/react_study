import React, {useState, useEffect} from 'react';

const MovieForm = ({addMovie}) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");

  const resetForm = () => {
    setMovieTitle('');
    setMovieYear('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addMovie(
      {
        title : movieTitle
        , year : movieYear
      }
    );

    resetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={movieTitle} placeholder="title" onChange={e => setMovieTitle(e.target.value)}/> <br/>
      <input type="text" value={movieYear} placeholder="year" onChange={e => setMovieYear(e.target.value)}/> <br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieForm;
