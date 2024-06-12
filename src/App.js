import React from 'react';
import './App.css';
import Intro from './components/Intro';
import WorkShowcase from './components/WorkShowcase';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import { projects, kaggleCompetitions, certifications } from './data';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <ThemeToggle />
      <Intro />
      <WorkShowcase
        projects={projects}
        kaggleCompetitions={kaggleCompetitions}
        certifications={certifications}
      />
    </div>
  );
};

export default App;

