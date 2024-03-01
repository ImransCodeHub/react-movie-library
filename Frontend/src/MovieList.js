import React from 'react';
import Movie from './Movie';
import NavBar from './NavBar';
import { Card } from 'react-bootstrap';

const MovieList = (props) => {

    const removeMovie = (movieToRemove) => {

        const requestOptions = {
        method: "DELETE",
        redirect: "follow"
        };

        fetch("http://127.0.0.1:8000/api/movieList/" + movieToRemove , requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));

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




/*
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
*/

