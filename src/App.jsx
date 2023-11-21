import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {movies} from './components/Movies';
import Homepage from './pages/Homepage';
import Category from './pages/Category';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <nav>
              <Link style={{padding: 5}} to="/">Home</Link>
              <Link style={{padding: 5}} to="/category/all">All</Link>
              <Link style={{padding: 5}} to="/category/action">Action</Link>
              <Link style={{padding: 5}} to="/category/adventure">Adventure</Link>
              <Link style={{padding: 5}} to="/category/comedy">Comedy</Link>
              <Link style={{padding: 5}} to="/category/fantasy">Fantasy</Link>
              <Link style={{padding: 5}} to="/category/sci-fi">Sci&#x2011;Fi</Link>
            </nav>
        </header>
        <main className='App-main'>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/category/:category" element={<Category movies={movies} />}>
                <Route index element={<MovieList movies={movies} />} />
              </Route>
                <Route path="/movies/:id" element={<MovieDetails />} />
            </Routes>
        </main>
        <footer className='App-footer'>
            <p>Made in React by dioncodes.com</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
