import React from 'react';
import './profilecontainer.module.scss';
import ProfileImage from './profileImage/ProfileImage';

function ProfileContainer() {
  return (
    <div className='profile-container'>
      <ProfileImage />
    </div>
  );
}

export default ProfileContainer;
