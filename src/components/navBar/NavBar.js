import React, { Component } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='logo'>
          <Link to='/components'>
            <img src={logo} alt='logo'></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
