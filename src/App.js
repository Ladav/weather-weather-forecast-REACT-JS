import React from 'react';
import { connect } from 'react-redux';

import classes from './App.css';
import Weather from './containers/Weather/Weather';
import Sidebar from './containers/Sidebar/Sidebar';

const app = (props) => {
  return (
    <div className={classes.App} >
      <Weather />
      <Sidebar />
    </div>);
};

const mapStateToProps = (state) => {
  return {
    icon: state.weather.currently.icon,
    image: state.image
  }
};

export default connect(mapStateToProps)(app);