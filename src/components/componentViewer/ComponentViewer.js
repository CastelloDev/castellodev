import React, { Component } from 'react';
import styles from './componentviewer.module.scss';
import WaterDrop from '../animationComponents/WaterDrop';
import IconSlider from '../iconSlider/IconSlider';

export class ComponentViewer extends Component {
	render() {
		return (
			<div className={styles['component-viewer-container']}>
				<WaterDrop />
				<IconSlider/>
			</div>
		);
	}
}

export default ComponentViewer;
