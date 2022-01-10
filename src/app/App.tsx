import Counter from '../counter/Counter';
import './App.css'
import NonsenseTable from '../nonsenseTable/NonsenseTable';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Barnstorm Nonsense</h1>
      </header>
      <div className="app-content">
      <Routes>
        <Route path="/" element={ <NonsenseTable /> } />
        <Route path="counter" element={ <Counter /> } />
      </Routes>
      </div>
    </div>
  );
}

export default App;
