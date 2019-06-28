import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import styles from '../App.module.scss';
import ComponentViewer from '../components/componentViewer/ComponentViewer';
import HomePage from '../components/home/HomePage';

export class Routes extends Component {
  render() {
    return (
      <div className={styles['content']}>
        <Route path='/components' exact component={ComponentViewer} />
        <Route path='/' exact component={HomePage} />
        <Redirect from='/*' to='/' />
      </div>
    );
  }
}

export default Routes;
