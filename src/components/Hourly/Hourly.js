import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import DataItem from '../../UI/DataItem/DataItem';
import Title from '../../UI/Title/Title';
import Summary from '../../UI/Summary/Summary';
import Footer from '../../UI/Footer/Footer';
import classes from './Hourly.css';

import icons from '../../assets/icon';

const linkStyles = {
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
}
const Mapbox = <a href="https://darksky.net/"
    target="_blank"
    rel="noopener noreferrer"
    style={linkStyles}>&nbsp;<u>Mapbox</u>&nbsp;</a>;
const Darksky = <a href="https://www.mapbox.com/"
    target="_blank"
    rel="noopener noreferrer"
    style={linkStyles}>&nbsp;<u>Darksky</u>&nbsp;</a>;

const hourly = (props) => {
    const updateSummary = (str) => {
        if (!str) return null;

        const tokens = str.split('-'); //partly-cloudy->[partly, cloudy]
        if (!tokens[1]) return tokens[0];
        else return `${tokens[0]} ${tokens[1]}`;
    };

    const hours = [];
    let hour = null;
    for (let i = 0; i < 24 && props.hourly.data[i]; i++) {    // there are 49 items in the hourly array
        hour = props.hourly.data[i];
        hours.push(<DataItem key={hour.time}
            summary={updateSummary(hour.icon)}
            srcIcon={icons[hour.icon] || icons['cloudy']}
            temp={hour.temperature.toFixed(2)}
            item={moment.unix(hour.time).local().format('HH•MM A')} />);
    };

    return (
        <div className={classes.Hourly}>
            <Title title={'Next 24•H'} />
            <Summary summary={props.hourly.summary} />
            <div className={classes.Hours__Container}>
                <div className={classes.Hours}>
                    {hours}
                </div>
            </div>
            <Footer left={null} right={<React.Fragment>Powered By • {Mapbox} and {Darksky} APIs</React.Fragment>} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        hourly: state.weather.hourly,
        location: state.location
    };
};

export default connect(mapStateToProps)(hourly);