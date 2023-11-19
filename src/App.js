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
              <Link style={{padding: 5}} to="/categories/action">Action</Link>
              <Link style={{padding: 5}} to="/categories/adventure">Adventure</Link>
              <Link style={{padding: 5}} to="/categories/comedy">Comedy</Link>
              <Link style={{padding: 5}} to="/categories/fantasy">Fantasy</Link>
              <Link style={{padding: 5}} to="/categories/scifi">Sci-Fi</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/category/:category" element={<Category />}>
                <Route index element={<MovieList movies={movies} />} />
                <Route path="/:id" element={<MovieDetails />} />
              </Route>
            </Routes>
          </Router>
        </header>
      </div>
    // </MoviesProvider>
  );
}

export default App;
