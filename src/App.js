// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import MoviesProvider from './providers/MoviesProvider';
import {movies} from './components/Movies';
import Scifi from './pages/Scifi';
import Homepage from './pages/Homepage';
import Comedy from './pages/Comedy';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    // <MoviesProvider>
      <div className="App">
        <header className="App-header">
          <Router>
            <nav>
              <Link style={{padding: 5}} to="/">Home</Link>
              <Link style={{padding: 5}} to="/scifi">Sci-Fi</Link>
              <Link style={{padding: 5}} to="/comedy">Comedy</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/scifi" element={<Scifi movies={movies} />} />
              <Route path="/comedy" element={<Comedy movies={movies} />} />
            </Routes>
          </Router>
        </header>
      </div>
    // </MoviesProvider>
  );
}

export default App;
