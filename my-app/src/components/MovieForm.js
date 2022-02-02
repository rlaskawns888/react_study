import React, {useState, useEffect} from 'react';
import InputField from './InputField';

const MovieForm = ({addMovie}) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [titleError, setTitleError] = useState("");
  const [yearError, setYearError] = useState("");

  const resetForm = () => {
    setMovieTitle('');
    setMovieYear('');
  };

  const validateForm = () => {
      let validated = true;

      if(!movieTitle){
        setTitleError('제목을 입력해주세요')
        validated = false;
      }

      if(!movieYear) {
        setYearError('년도를 입력해주세요.')
        validated = false;
      }

      return validated;
  };

  // reset error message
  const resetErrorForm = () => {
    setTitleError('');
    setYearError('');
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(!validateForm()) {
      return false;
    }

    addMovie({
        id : Date.now()
        , title : movieTitle
        , year : movieYear
    });

    resetErrorForm();
    resetForm();
  };

  return (
    <form onSubmit={onSubmit}>
      <InputField
        type = "text"
        value = {movieTitle}
        placeholder = "movie title"
        onChange = {e => setMovieTitle(e.target.value)}
        errorMessage = {titleError}
      />

      <InputField
        type = "text"
        value = {movieYear}
        placeholder = "movie year"
        onChange = {e => setMovieYear(e.target.value)}
        errorMessage = {yearError}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieForm;
