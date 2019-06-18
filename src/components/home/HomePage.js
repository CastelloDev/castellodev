import React, { Component } from 'react';
import VerticalBar from './verticalBar/VerticalBar';
import ProfileContainer from './profileContainer/ProfileContainer';
import './homepage.css';

export class HomePage extends Component {
  render() {
    return (
      <div className='homepage'>
        <div className='top-half'>
          <VerticalBar position='left' />
          <ProfileContainer />
          <VerticalBar position='right' />
        </div>
      </div>
    );
  }
}

export default HomePage;
