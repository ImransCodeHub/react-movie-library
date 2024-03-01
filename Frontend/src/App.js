import './App.css';
import MovieList from './MovieList';
import SubmitReview from './SubmitReview';
import React from 'react';
import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const updateMovies = (updatedMovies) => {
    setMovies(updatedMovies);
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/movieList");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [updateMovies]);
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieList movies={movies} updateMovies={updateMovies} />} />
        <Route path='/submit-review' element={<SubmitReview />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



/**
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
 */