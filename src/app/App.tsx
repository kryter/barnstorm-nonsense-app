import Counter from '../counter/Counter';
import './App.css'
import NonsenseTable from '../nonsenseTable/NonsenseTable';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Login from '../login/Login';
import DocumentEditor from '../documentEditor/DocumentEditor';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={ <NonsenseTable /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="counter" element={ <Counter /> } />
          <Route path="documents" element={ <DocumentEditor /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
