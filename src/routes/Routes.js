import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import styles from '../App.module.scss';
import ComponentViewer from '../components/componentViewer/ComponentViewer';
import HomePage from '../components/home/HomePage';
import * as routes from '../constants/routes';

export class Routes extends Component {
  render() {
    return (
      <div className={styles['content']}>
        <Route path={routes.components} exact component={ComponentViewer} />
        <Route path={routes.svgFormatter} exact component={ComponentViewer} />
        <Route path={routes.home} exact component={HomePage} />
        <Redirect from='/*' to={routes.home} />
      </div>
    );
  }
}

export default Routes;
