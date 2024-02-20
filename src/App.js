import './App.css';
import NavBar from './NavBar';
import MovieList from './MovieList';
import moviesData from './movies.json';
import SubmitReview from './SubmitReview';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='/movie-list' element={<MovieList movies={moviesData.movies} />} />
        <Route path='/submit-review' element={<SubmitReview/>}/>

        

      </Routes>
    </BrowserRouter>
    
    
    // <React.StrictMode>
    // <NavBar />
    // <MovieList movies={moviesData.movies} />
    // </React.StrictMode>
  );
}

export default App;
