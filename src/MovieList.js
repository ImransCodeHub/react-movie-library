/*
Create and display a react component “MovieList” this component will accept a json object 
through its ‘props’ argument. The json is contained in the file movies.json. The “MovieList” 
object will loop through each of the movies and display a “Movie” component.
*/

import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;