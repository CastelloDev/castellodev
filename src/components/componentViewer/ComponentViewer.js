import React, { Component } from 'react';
import styles from './componentviewer.module.scss';
import WaterDrop from '../animationComponents/WaterDrop';
export class ComponentViewer extends Component {
  render() {
    return (
      <div className={styles['component-viewer-container']}>
        <WaterDrop />
      </div>
    );
  }
}

export default ComponentViewer;
