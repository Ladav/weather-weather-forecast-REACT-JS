import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import classes from './Main.css';
import Search from './Search/Search';
import Summary from '../../UI/Summary/Summary';
import Footer from '../../UI/Footer/Footer';
import DirectionArrow from '../../UI/DirectionArrow/DirectionArrow';
import * as actionCreator from '../../store/action/search';

import icons from '../../assets/icon';
import DaySummary from '../utility/DaySummary';

const updateSummary = (str) => {
    if (!str) return null;

    const tokens = str.split('-'); //partly-cloudy->[partly, cloudy]
    if (!tokens[1]) return tokens[0];
    else return `${tokens[0]} ${tokens[1]}`;
};

const main = (props) => {
    let daySummary = null;
    if (props.isAvail) daySummary = <DaySummary className={classes.DaySummary} />

    return (
        // <div className={classes.Main__Container}>

            <div className={classes.Main}>
            <Search />
            <Summary summary={daySummary} />
                <div className={classes.TemperatureOverview}>
                    <div className={classes.Temperature}>
                        {props.temp.value + '°'}
                    </div>
                    <Summary
                        summary={updateSummary(props.currently.icon)}
                        styles={{
                            alignItems: 'flex-end',
                            textTransform: 'capitalize'
                        }} />
                    <div className={classes.Weather__Unit}>
                        <div className={classes.Unit}>
                            <span
                                className={props.temp.unit === 'si' ? classes.Active : null}
                                onClick={() => props.onClickHandler('si')}>
                                <p className={classes.Celsius}>Celsius</p>
                            </span>
                        &nbsp;|&nbsp;
                        <span
                                className={props.temp.unit === 'us' ? classes.Active : null}
                                onClick={() => props.onClickHandler('us')}>
                                <p className={classes.Fahrenheit}>Fahrenheit</p>
                            </span>
                        </div>
                        <img src={icons[props.currently.icon] || icons['cloudy']} alt="weather icon" />
                    </div>
                </div>
                <Footer
                left={props.loc.name}
                middle={props.isAvail && !props.scroll ? <DirectionArrow  /> : null}
                right={moment().format(`dddd • DD MMMM YYYY • ${props.time.hh}:${props.time.mm} A`)} />
            </div>
        // </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currently: state.weather.currently,
        temp: state.temperature,
        loc: state.location,
        isAvail: state.dataAvailable
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onClickHandler: (unit) => dispatch(actionCreator.unitChanged(unit))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(main);