import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <section id="projects">
          {/* Projects section content will go here */}
        </section>
        <section id="skills">
          {/* Skills section content will go here */}
        </section>
        <section id="contact">
          {/* Contact section content will go here */}
        </section>
      </main>
    </div>
  );
}

export default App;
