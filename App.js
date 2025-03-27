import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import FoundersTeam from './pages/FoundersTeam';
import Mentor from './pages/Mentor';
import Investor from './pages/Investor';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/founders-team" element={<FoundersTeam />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/investor" element={<Investor />} />
      </Routes>
    </div>
  );
}

export default App;
