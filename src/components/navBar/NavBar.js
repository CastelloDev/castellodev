import React, { Component } from 'react';
import styles from './navbar.module.scss';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <div className={styles['navbar']}>
        <div className={styles['logo']}>
          <Link to='/components'>
            <img src={logo} alt='logo'></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
