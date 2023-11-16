// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MoviesProvider from './Providers/MoviesProvider';
import Scifi from './pages/Scifi';
import Homepage from './pages/Homepage';

function App() {
  return (
    <MoviesProvider>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/scifi">Sci-Fi</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/scifi" element={<Scifi />} />
          </Routes>
        </header>
      </div>
    </MoviesProvider>
  );
}

export default App;
