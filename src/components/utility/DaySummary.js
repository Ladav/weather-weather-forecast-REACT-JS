import React from 'react';
import {connect } from 'react-redux';

const daySummary = (props) => {
    return <div className={props.className} >
        {props.weather.daily.data[0].summary} <br />
        It is {props.temp.value}° {props.unit === 'si' ? ' Celsius' : ' fahrenheit'} out. 
        The high today is {props.weather.daily.data[0].temperatureHigh}° {props.unit === 'si' ? ' Celsius' : ' fahrenheit'}, 
        with a low of {props.weather.daily.data[0].temperatureLow}° {props.unit === 'si' ? ' Celsius' : ' fahrenheit'}. 
        There is {(props.weather.daily.data[0].precipProbability * 100).toFixed(1)}% chances of rain.
    </div>;
};

const mapPropsToState = (state) => {
    return {
        weather: state.weather,
        temp: state.temperature,
        unit: state.temperature.unit
    };
};

export default connect(mapPropsToState)(daySummary);