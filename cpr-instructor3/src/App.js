import React from 'react';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
    <main>
      <Home />
    </main>
  </div>
  );
}

export default App;
