import React, { Component } from 'react';
import styles from './svgPlayground.module.scss';
import Leaf from './svg/Leaf';

export default class SvgPlayground extends Component {
    render() {
        return (
            <div className={styles['playground-container']}>
                <div className={styles['playground-showcase']}>
                    <Leaf/>
                </div>
            </div>
        );
    }
}
