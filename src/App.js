import React from 'react';
import Intro from './containers/Intro';
import ContactMe from './containers/ContactMe';
import TestimonialsPage from './containers/testimonials';

function App() {
  return (
    <div className="scrollbar scrollbar-juicy-peach">
      <Intro />
      <TestimonialsPage />
      <ContactMe />
    </div>
  );
}

export default App;
