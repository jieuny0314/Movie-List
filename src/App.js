/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import './App.css';

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Detail />} />
    </Routes>
  </Router>
}

export default App;
