import './App.css';
import NavBar from './NavBar';
import MovieList from './MovieList';
import moviesData from './movies.json';
import moviesReview from './moviesReview.json';
import SubmitReview from './SubmitReview';
import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  const [movies, setMovies] = useState(moviesReview.movies);

  const updateMovies = (updatedMovies) => {
    setMovies(updatedMovies);
  };

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='/movie-list' element={<MovieList movies={movies} updateMovies={updateMovies} />} />
        <Route path='/submit-review' element={<SubmitReview />} />
      </Routes>
    </BrowserRouter>
    <div className="text-center">
      <br />
      <br />
      <br />
      <br />
      <h2>Assignment 4 - Movie Review</h2>
      <br />
      <br />

    </div>
    </>
  );
}

export default App;


    // Assignment:3
    // <React.StrictMode>
    // <NavBar />
    // <MovieList movies={moviesData.movies} />
    // </React.StrictMode>