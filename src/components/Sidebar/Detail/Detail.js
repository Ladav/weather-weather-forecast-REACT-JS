import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';

import classes from './Detail.css';
import DataElement from './DataElement/DataElement';
import Heading from '../../../UI/Heading/Heading';

import DaySummary from '../../utility/DaySummary';

const WEATHER_DETAILS = {
    property: ['cloudy', 'precipitation', 'humidity'],
    value: ['cloudCover', 'precipProbability', 'humidity']
};

const detail = (props) => {
    let daySummary = <span>&#x3030;&#x3030;&#x3030;<br />
        &#x3030;&#x3030;&#x3030;&#x3030;<br />
        &#x3030;&#x3030;&#x3030;<br />
        &#x3030;&#x3030;</span>;
    if (props.isAvail) {
        daySummary = <DaySummary />;
    }

    const weatherDetail = WEATHER_DETAILS.property.map((el, index) => {
        return <DataElement
            item={el}
            key={el}
            data={props.isAvail ? (props.weather.daily.data[0][WEATHER_DETAILS.value[index]] * 100).toFixed(1) + `%` : null} />
    });

    const upcoming = props.weather.daily.data.map(el => {
        return <DataElement
            item={moment.unix(el.time).local().format('dddd')}
            key={el.time}
            data={`LOW: ${el.temperatureLow | 0}° • HIGH:${el.temperatureHigh | 0}°`} />
    });

    return (
        <div className={classes.Detail}>
            <Heading title={"DAY SUMMARY"} description={moment().format('dddd • DD MMMM')} />
            <div className={classes.Summary}>{daySummary}</div>


            <Heading title={"WEATHER DETAILS"} description={null} />
            <div className={classes.Data}>
                {weatherDetail}
                <DataElement
                    item={"wind"}
                    data={props.isAvail ? props.weather.currently.windSpeed + ' km/h' : null} />
            </div>

            <Heading title={"UPCOMING"} description={null} />
            <div className={classes.Upcoming}>
                {upcoming}
            </div>
        </div>
    );
};

const mapPropsToState = (state) => {
    return {
        weather: state.weather,
        isAvail: state.dataAvailable
    };
};
export default connect(mapPropsToState)(detail);