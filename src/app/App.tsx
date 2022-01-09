import { useState } from 'react'
import Counter from '../counter/Counter';
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Barnstorm Nonsense</h1>
      </header>
      <div className="app-content">
        <Counter />
      </div>
    </div>
  );
}

export default App;
