/*
Create a react component named “Movie” this component will accept a movie name, year and 
rating though its ‘props’ argument.
*/

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const Movie = ({ movie }) => {
    return (
      <Container fluid>
        <Row className="movie-row">
          <Col>
            <h2>{movie.name}</h2>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p><strong>Release Date:</strong> {movie.releaseDate}</p>
            <p><strong>Description:</strong> {movie.description}</p>
            <p><strong>Actors:</strong> {movie.actors}</p>
            <p><strong>Poster:</strong> </p>
            <img src={movie.poster} alt={movie.name} style={{ width: '100px', height: 'auto' }} />

          </Col>
        </Row>
      </Container>
    );
  };

  export default Movie;


// Assignment:3
// const Movie = ({ movie }) => {
//   return (
//     <Container fluid>
//       <Row className="movie-row">
//         <Col>
//           <h2>{movie.name}</h2>
//           <p><strong>Year:</strong> {movie.year}</p>
//           <p><strong>Rating:</strong> {movie.rating}</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// const Movie = (props) => {
//   const { movie, key } = props;
//   return (
//     <div>
//       <h2>{movie.name}</h2>
//       <p>{movie.year}</p>
//       <p>{movie.rating}</p>
//     </div>
//   );
// };



