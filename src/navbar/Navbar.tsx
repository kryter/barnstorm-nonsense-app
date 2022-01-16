import { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../favicon.png'
import ModalDialog from '../modalDialog/ModalDialog';
import './Navbar.css'

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <header className="app-header">
      <div className="app-home">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Barnstorm Nonsense</h1>
        <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>Open Modal</button>
      </div>
      <div className="navbar-tab-container">
        <Link className="navbar-tab-button navbar-tab-login" to="/login">Login</Link>
        <Link className="navbar-tab-button navbar-tab-table" to="/">Table</Link>
        <Link className="navbar-tab-button navbar-tab-counter" to="/counter">Counter</Link>
      </div>
      {isModalOpen && <ModalDialog closeModalDialog={() => setIsModalOpen(false)}></ModalDialog>}
    </header>

  );
}

export default Navbar;
