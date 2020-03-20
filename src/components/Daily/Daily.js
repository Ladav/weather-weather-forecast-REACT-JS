import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import classes from './Daily.css';
import icon from '../../assets/icon/cloudy.svg';
import Title from '../../UI/Title/Title';
import Summary from '../../UI/Summary/Summary';
import DataItem from '../../UI/DataItem/DataItem';
import Footer from '../../UI/Footer/Footer';

import icons from '../../assets/icon';

const daily = (props) => {
    const updateSummary = (str) => {
        if (!str) return null;

        const tokens = str.split('-'); //partly-cloudy->[partly, cloudy]
        if (!tokens[1]) return tokens[0];
        else return `${tokens[0]} ${tokens[1]}`;
    };
    
    const days = props.daily.data.map((day) => {
        return <DataItem key={day.time}
            summary={updateSummary(day.icon)}
            srcIcon={icons[day.icon] || icons['cloudy']}
            temp={day.temperatureHigh}
            item={moment.unix(day.time).local().format('dddd')} />
    });
    
    return (
        <div className={classes.Daily}>
            <Title title={'This Week'} styles={{ alignItem: 'flex-start' }} />
            <br />
            <Summary summary={props.daily.summary} />
            <div className={classes.Days__Container}>
                <div className={classes.Days}>
                    {days}
                </div>
            </div>
            <Footer
                left={'Sunrise • ' + moment.unix(props.daily.data[0].sunriseTime).local().format('HH•MM A')}
                right={'Sunset • ' + moment.unix(props.daily.data[0].sunsetTime).local().format('HH•MM A')} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        daily: state.weather.daily,
        location: state.location
    };
};

export default connect(mapStateToProps)(daily);