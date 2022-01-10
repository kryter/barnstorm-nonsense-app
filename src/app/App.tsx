import Counter from '../counter/Counter';
import './App.css'
import NonsenseTable from '../nonsenseTable/NonsenseTable';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
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
