import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <section id="skills">
          {/* Skills section content will go here */}
        </section>
        <Contact />
      </main>
    </div>
  );
}

export default App;
