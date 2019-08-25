import React from 'react';
import styles from './svgStyle.module.scss';

export default function Leaf() {

    return (
        <div id={'leaf'}>
            <div className={styles['leaf']}></div>
            <div className={styles['stem']}></div>
        </div>
    );
}
