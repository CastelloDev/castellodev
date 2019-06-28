import React, { Component } from 'react';
import './componentviewer.css';
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
