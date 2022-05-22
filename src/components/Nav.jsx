import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import About from './About.jsx'
import './Nav.css';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to='/' >
        <div className='Logo'>
          <span className="navbar-brand">
            <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo Henry" />
          </span>
          <h3>Henry - Weather App</h3> 
        </div>
      </Link>
      <Link to='/about'>
        {/* <span>About</span> */}
        <h4>Informacion de contacto</h4>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
