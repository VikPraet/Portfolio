// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home'; // Importing the Home component

import './globals.css';  // Ensure this is imported in your main file or App.jsx

const App = () => {
  return (
    <>
      <Header />
      <Home /> {/* This will include your Start Section and other sections */}
    </>
  );
};

export default App;
