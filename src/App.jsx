import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import NavBar from './components/NavBar';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Hello React!</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/new" element={<NewPlayerForm />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
