import React, { Component } from 'react';
import './componentviewer.module.scss';
import WaterDrop from '../animationComponents/WaterDrop';
export class ComponentViewer extends Component {
  render() {
    return (
      <div className='component-viewer-container'>
        <WaterDrop />
      </div>
    );
  }
}

export default ComponentViewer;
