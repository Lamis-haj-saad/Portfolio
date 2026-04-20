import React, { useEffect } from 'react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills.jsx';
import FeaturedProjects from './components/FeaturedProjects';
import MoreProjects from './components/MoreProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Journey />
      <div className="divider"></div>
      <Skills />
      <div className="divider"></div>
      <FeaturedProjects />
      <div className="divider"></div>
      <MoreProjects />
      <div className="divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;