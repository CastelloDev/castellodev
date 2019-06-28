import React, { Component } from 'react';
import VerticalBar from './verticalBar/VerticalBar';
import ProfileContainer from './profileContainer/ProfileContainer';
import styles from './homepage.module.scss';

export class HomePage extends Component {
  render() {
    return (
      <div className={styles['homepage']}>
        <div className={styles['top-half']}>
          <VerticalBar position='left' />
          <ProfileContainer />
          <VerticalBar position='right' />
        </div>
      </div>
    );
  }
}

export default HomePage;
