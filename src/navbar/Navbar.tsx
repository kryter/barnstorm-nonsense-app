import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

  return (
    <header className="app-header">
      <h1>Barnstorm Nonsense</h1>
      <div className="navbar-tab-container">
        <Link className="navbar-tab-button navbar-tab-table" to="/">Table</Link>
        <Link className="navbar-tab-button navbar-tab-counter" to="/counter">Counter</Link>
      </div>
    </header>

  );
}

export default Navbar;
