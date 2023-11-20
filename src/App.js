import './App.css';
import React from 'react';
import {movies} from './components/Movies';
// import Scifi from './pages/Scifi';
import Homepage from './pages/Homepage';
// import Comedy from './pages/Comedy';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Category from './pages/Category';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Router>
            <nav>
              <Link style={{padding: 5}} to="/">Home</Link>
              <Link style={{padding: 5}} to="/category/action">Action</Link>
              <Link style={{padding: 5}} to="/category/adventure">Adventure</Link>
              <Link style={{padding: 5}} to="/category/comedy">Comedy</Link>
              <Link style={{padding: 5}} to="/category/fantasy">Fantasy</Link>
              <Link style={{padding: 5}} to="/category/scifi">Sci-Fi</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/category/:category" element={<Category movies={movies} />}>
                <Route index element={<MovieList movies={movies} />} />
              </Route>
                <Route path="/movies/:id" element={<MovieDetails />} />
            </Routes>
          </Router>
        </header>
      </div>
  );
}

export default App;
