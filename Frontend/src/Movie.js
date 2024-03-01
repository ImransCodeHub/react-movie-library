import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button,Badge, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Movie = ({ movie, removeMovie  }) => {

  const handleRemoveClick = () => {
    const movieToRemove = movie._id;
    removeMovie(movieToRemove);
  };

    return (
      <Container fluid>
        <Row className="movie-row">
          <Col>
            <Card>
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Text>
                <strong>Rating:</strong> <Badge bg="primary">{movie.rating}</Badge>
              </Card.Text>
              <Card.Text><strong>Release Date:</strong> {movie.releaseDate}</Card.Text>
              <Card.Text><strong>Description:</strong> {movie.description}</Card.Text>
              <Card.Text><strong>Actors:</strong> {movie.actors}</Card.Text>
              <Card.Text><strong>Poster:</strong></Card.Text>
              <Card.Img src={movie.poster} alt={movie.name} style={{ width: '100px', height: 'auto' }} />
              {/* For each movie, add a “Remove” button. This button when pressed will remove the display of the movie. */}
              <Col>
                <br />
                <Button variant="danger" onClick={handleRemoveClick}>Remove</Button>
              </Col>
            </Card.Body>
          </Card>

          </Col>
        </Row>
      </Container>
    );
  };

  export default Movie;



/*
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button,Badge, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Movie = ({ movie, removeMovie  }) => {

  const handleRemoveClick = () => {
    removeMovie(movie);
  };

    return (
      <Container fluid>
        <Row className="movie-row">
          <Col>
            <Card>
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Text>
                <strong>Rating:</strong> <Badge bg="primary">{movie.rating}</Badge>
              </Card.Text>
              <Card.Text><strong>Release Date:</strong> {movie.releaseDate}</Card.Text>
              <Card.Text><strong>Description:</strong> {movie.description}</Card.Text>
              <Card.Text><strong>Actors:</strong> {movie.actors}</Card.Text>
              <Card.Text><strong>Poster:</strong></Card.Text>
              <Card.Img src={movie.poster} alt={movie.name} style={{ width: '100px', height: 'auto' }} />
              For each movie, add a “Remove” button. This button when pressed will remove the display of the movie.
              <Col>
                <br />
                <Button variant="danger" onClick={handleRemoveClick}>Remove</Button>
              </Col>
            </Card.Body>
          </Card>

          </Col>
        </Row>
      </Container>
    );
  };

  export default Movie;


Assignment:3
const Movie = ({ movie }) => {
  return (
    <Container fluid>
      <Row className="movie-row">
        <Col>
          <h2>{movie.name}</h2>
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
        </Col>
      </Row>
    </Container>
  );
};

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

*/
