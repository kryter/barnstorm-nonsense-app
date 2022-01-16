import { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../favicon.png'
import './Navbar.css'

function Navbar() {

  return (
    <header className="app-header">
      <div className="app-home">
        <img src={logo} className="app-logo" alt="logo" />
        <h1>Barnstorm Nonsense</h1>
      </div>
      <div className="navbar-tab-container">
        <Link className="navbar-tab-button navbar-tab-table" to="/">Table</Link>
        <Link className="navbar-tab-button navbar-tab-counter" to="/counter">Counter</Link>
      </div>
    </header>

  );
}

export default Navbar;
