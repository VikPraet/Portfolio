// src/pages/Home.jsx
import React from 'react';
import StartSection from '../components/StartSection';
import ProjectsSection from '../components/Projects';
import Divider from '../components/Divider';

const Home = () => {
  return (
    <div>
      <StartSection />
      <Divider/>
      <ProjectsSection />
      <Divider/>
      {/* Other sections (Projects, About, Contact, etc.) will be added here later */}
    </div>
  );
};

export default Home;
