// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home'; // Importing the Home component

const App = () => {
  return (
    <>
      <Header />
      <Home /> {/* This will include your Start Section and other sections */}
    </>
  );
};

export default App;
