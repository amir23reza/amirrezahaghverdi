import React from 'react';
import Intro from './containers/Intro';
import ContactMe from './containers/ContactMe';
import TestimonialsPage from './containers/testimonials';
import ProjectGallery from './containers/ProjectGallery';
import SoFar from './containers/soFar';

function App() {
  return (
    <div className="scrollbar scrollbar-juicy-peach">
      <Intro />
      <SoFar />
      <ProjectGallery />
      <TestimonialsPage />
      <ContactMe />
    </div>
  );
}

export default App;
