// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import MoviesProvider from './providers/MoviesProvider';
import {movies} from './components/Movies';
import Scifi from './pages/Scifi';
import Homepage from './pages/Homepage';
// import Comedy from './pages/Comedy';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Category from './pages/Category';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    // <MoviesProvider>
      <div className="App">
        <header className="App-header">
          <Router>
            <nav>
              <Link style={{padding: 5}} to="/">Home</Link>
              <Link style={{padding: 5}} to="/action">Action</Link>
              <Link style={{padding: 5}} to="/adventure">Adventure</Link>
              <Link style={{padding: 5}} to="/comedy">Comedy</Link>
              <Link style={{padding: 5}} to="/fantasy">Fantasy</Link>
              <Link style={{padding: 5}} to="/scifi">Sci-Fi</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Homepage />}>
                <Route index element={<MovieList movies={movies} />} />
                <Route path="/:category" element={<MovieDetails />} />
              </Route>
              <Route path="/scifi" element={<Category movies={movies} category="scifi" />} />
              <Route path="/comedy" element={<Comedy movies={movies} category="comedy" />} />
            </Routes>
          </Router>
          <Homepage />
        </header>
      </div>
    // </MoviesProvider>
  );
}

export default App;
