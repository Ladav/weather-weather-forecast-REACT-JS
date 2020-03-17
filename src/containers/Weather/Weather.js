import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../../components/Main/Main';
import Daily from '../../components/Daily/Daily';
import Hourly from '../../components/Hourly/Hourly';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './Weather.css';

class Weather extends Component {
  state = {
  };

  render() {
    console.log(this.props)
    return (
      <div className={classes.Weather}>
        <Main />
        {this.props.loading ? <Spinner /> : null}
        {this.props.isAvail ? <><Daily /> <Hourly /></> : null}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      isAvail: state.dataAvailable
  };
};
export default connect(mapStateToProps)(Weather);
