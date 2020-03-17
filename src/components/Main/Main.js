import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import classes from './Main.css';
import Search from './Search/Search';
import Title from '../../UI/Title/Title';
import Summary from '../../UI/Summary/Summary';
import Footer from '../../UI/Footer/Footer';
import icon from '../../assets/icon/cloudy.svg';
import * as actionCreator from '../../store/action/weatherMain';

const main = (props) => {
    return (
        <div className={classes.Main__Container}>
        <Search />
        <div className={classes.Main}>
            <div className={classes.TemperatureOverview}>
                <Title title={props.temp.unit === 'si' ? props.temp.celsius + '°' : props.temp.fahrenheit + '°'}
                    styles={{fontSize: '170px', lineHeight: '170px', fontWeight: '100'}} />
                <Summary summary={props.currently.summary} styles={{alignItems: 'flex-end'}} />
                <div className={classes.Weather__Unit}>
                    <div className={classes.Unit}>
                        <span
                            className={props.temp.unit === 'si' ? classes.Active : null}
                            onClick={() => props.onClickHandler('si')}>
                            <p className={classes.Celsius}>Celsius</p>
                        </span>
                        |
                        <span
                            className={props.temp.unit === 'us' ? classes.Active : null}
                            onClick={() => props.onClickHandler('us')}>
                            <p className={classes.Fahrenheit}>Fahrenheit</p>
                        </span>
                    </div>
                    <img src={icon} alt="" />
                </div>
            </div>
        </div>
        <Footer left={props.loc.name} right={moment().format(`dddd • DD MMMM YYYY • hh:mm A`)} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currently: state.weather.currently,
        temp: state.temperature,
        loc: state.location
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onClickHandler: (unit) => dispatch(actionCreator.unitChanged(unit))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(main);