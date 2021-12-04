import React from 'react';
import Intro from './containers/Intro';
import ContactMe from './containers/ContactMe';
import TestimonialsPage from './containers/testimonials';
import Portfolio from './containers/portfolio';
import SoFar from './containers/soFar';
import Skills from './containers/skills';
import {
  Element
} from 'react-scroll'

function App() {
  return (
    <div className="scrollbar scrollbar-juicy-peach">
      <Intro />
      <Element name="soFar" className="element">
        <SoFar />
      </Element>
      <Element name="portfolio" className="element">
        <Portfolio />
      </Element>
      <Element name="skills" className="element">
        <Skills />
      </Element>
      <Element name="considerations" className="element">
        <TestimonialsPage />
      </Element>
      {/* <Element name="contact" className="element">
        <ContactMe />
      </Element> */}
    </div>
  );
}

export default App;
