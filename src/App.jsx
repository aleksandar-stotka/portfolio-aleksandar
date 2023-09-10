import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Navbar/>
    <Hero/>
    <Skills/>
   <About/>
    </div>
  );
}

export default App;

