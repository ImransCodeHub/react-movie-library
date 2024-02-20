import './App.css';
import NavBar from './NavBar';
import MovieList from './MovieList';
import moviesData from './movies.json';
import moviesReview from './moviesReview.json';
import SubmitReview from './SubmitReview';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='/movie-list' element={<MovieList movies={moviesReview.movies} />} />
        <Route path='/submit-review' element={<SubmitReview/>}/>

        

      </Routes>
    </BrowserRouter>
    
    // Assignment:3
    // <React.StrictMode>
    // <NavBar />
    // <MovieList movies={moviesData.movies} />
    // </React.StrictMode>
  );
}

export default App;
