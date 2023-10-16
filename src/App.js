import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // Import a global stylesheet for basic styling

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
