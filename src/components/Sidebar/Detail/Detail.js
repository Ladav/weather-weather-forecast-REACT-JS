import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';

import classes from './Detail.css';
import DataElement from './DataElement/DataElement';
import Heading from '../../../UI/Heading/Heading';

const WEATHER_DETAILS = {
    property: ['cloudy', 'precipitation', 'humidity'],
    value: ['cloudCover', 'precipProbability', 'humidity']
};

class detail extends Component {
    updateSummary = () => {
        const $summary = document.querySelector('.summary');
        let html = `&#x3030;&#x3030;&#x3030;<br>
                    &#x3030;&#x3030;&#x3030;&#x3030;<br>
                    &#x3030;&#x3030;&#x3030;<br>
                    &#x3030;&#x3030;`;
        if (this.props.isAvail) {
            html = `${this.props.weather.daily.data[0].summary} <br> 
                    It is ${this.props.temp.value}° ${this.props.unit === 'si' ? ' Celsius' : ' fahrenheit'} out. 
                    The high today is ${this.props.weather.daily.data[0].temperatureHigh}° ${this.props.unit === 'si' ? ' Celsius' : ' fahrenheit'}, 
                    with a low of ${this.props.weather.daily.data[0].temperatureLow}° ${this.props.unit === 'si' ? ' Celsius' : ' fahrenheit'}. 
                    There is ${this.props.weather.daily.data[0].precipProbability}% chances of rain.`;
        }
        $summary.textContent = '';
        $summary.insertAdjacentHTML('afterbegin', html);
    };

    componentDidMount() {
        this.updateSummary();
    };
    componentDidUpdate() {
        this.updateSummary();
    };

    render() {
        const weatherDetail = WEATHER_DETAILS.property.map((el, index) => {
            return <DataElement
                item={el}
                key={el}
                data={this.props.isAvail ? (this.props.weather.daily.data[0][WEATHER_DETAILS.value[index]] * 100).toFixed(1) + `%` : null} />
        });
        const upcoming = this.props.weather.daily.data.map(el => {
            return <DataElement
                item={moment.unix(el.time).local().format('dddd')}
                key={el.time}
                data={`LOW: ${el.temperatureLow|0}° • HIGH:${el.temperatureHigh|0}°`} />
        });

        return (
            <div className={classes.Detail}>
                <Heading title={"DAY SUMMARY"} description={moment().format('dddd • DD MMMM')} />
                <div className={classes.Summary + ' summary'}></div>

                <div className={classes.Scrollable}>
                    <Heading title={"WEATHER DETAILS"} description={null} />
                    <div className={classes.Data}>
                        {weatherDetail}
                        <DataElement
                            item={"wind"}
                            data={this.props.isAvail ? this.props.weather.currently.windSpeed + ' km/h' : null} />
                    </div>

                    <Heading title={"UPCOMING"} description={null} />
                    <div className={classes.Upcoming}>
                        {upcoming}
                    </div>
                </div>
            </div>
        );
    };
};

const mapPropsToState = (state) => {
    return {
        weather: state.weather,
        isAvail: state.dataAvailable,
        temp: state.temperature,
        unit: state.temperature.unit
    };
};
export default connect(mapPropsToState)(detail);