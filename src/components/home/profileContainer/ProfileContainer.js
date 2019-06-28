import React from 'react';
import styles from './profilecontainer.module.scss';
import ProfileImage from './profileImage/ProfileImage';

function ProfileContainer() {
  return (
    <div className={styles['profile-container']}>
      <ProfileImage />
    </div>
  );
}

export default ProfileContainer;
