import React from 'react';
import Intro from './containers/Intro';
import ContactMe from './containers/ContactMe';
import TestimonialsPage from './containers/testimonials';
import Portfolio from './containers/portfolio';
import SoFar from './containers/soFar';
import Skills from './containers/skills';

function App() {
  return (
    <div className="scrollbar scrollbar-juicy-peach">
      <Intro />
      <SoFar />
      <Portfolio />
      <Skills />
      <TestimonialsPage />
      <ContactMe />
    </div>
  );
}

export default App;
