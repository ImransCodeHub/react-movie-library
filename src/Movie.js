/*
Create a react component named “Movie” this component will accept a movie name, year and 
rating though its ‘props’ argument.
*/

import React from 'react';

const Movie = (props) => {
  const { movie, key } = props;
  return (
    <div>
      <h2>{movie.name}</h2>
      <p>{movie.year}</p>
      <p>{movie.rating}</p>
    </div>
  );
};

export default Movie;

