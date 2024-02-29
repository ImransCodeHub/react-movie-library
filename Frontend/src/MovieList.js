/*
Create and display a react component “MovieList” this component will accept a json object 
through its ‘props’ argument. The json is contained in the file movies.json. The “MovieList” 
object will loop through each of the movies and display a “Movie” component.
*/

import React from 'react';
import Movie from './Movie';
import NavBar from './NavBar';
import { Card } from 'react-bootstrap';

const MovieList = (props) => {
    const removeMovie = (movieToRemove) => {
        
        const updatedMovies = props.movies.filter(movie => movie !== movieToRemove);
        props.updateMovies(updatedMovies);

      };

    return (
        <Card>
        <Card.Body>
            <NavBar />
            {props.movies.map((movie, index) => (
            <Movie key={index} movie={movie} removeMovie={removeMovie}/>
            ))}
        </Card.Body>
        </Card>
    );
};
    
export default MovieList;

// Assignment:3
// const MovieList = (props) => {
//   return (
//     <div>
//       {props.movies.map((movie, index) => (
//         <Movie key={index} movie={movie} />
//       ))}
//     </div>
//   );
// };

