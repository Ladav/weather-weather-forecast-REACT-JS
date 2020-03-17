import * as actionTypes from './actionTypes';
import axios from 'axios';

export const searchValueChanged = (val) => {
    return { type: actionTypes.SEARCH_VAL_CHANGED, val };
};

const formatLocation = (loc) => {
    const place = loc.split(',');
    return place[0] + ' • ' + place[place.length - 1];
};
const setLoadingOff = () => {
    return { type: actionTypes.LOADING_OFF };
};
const setLoadingOn = () => {
    return { type: actionTypes.LOADING_ON };
};

const fetchedDataHandler = (data) => {
    return {
        type: actionTypes.FETCH_DATA,
        ...data
    };
};

const errorHandler = (error) => {
    return {
        type: actionTypes.ERROR_OCCUR,
        error
    };
};

export const searchButtonClicked = (val) => {
    return (dispatch, getState) => {
        dispatch(setLoadingOn());
        axios.get(`https://ladav-weatherly.herokuapp.com/weather?address=${getState().search}&unit=si`)
            .then(res => {
                if (res.data.error) {
                    console.log("error " + res.data.error)
                    return dispatch(errorHandler(res));
                }

                //// state for main
                const forecast = res.data.forecast;
                console.log(forecast);
                const forecastData = {
                    temp: {
                        celsius: forecast.currently.temperature,
                        fahrenheit: ((forecast.currently.temperature * 9/5) + 32).toFixed(2)
                    },
                    location: {
                        name: formatLocation(forecast.location),
                        longitude: forecast.longitude,
                        latitude: forecast.latitude
                    },
                    weather: {
                        currently: {
                            ...forecast.currently
                        },
                        daily: {
                            data: forecast.daily.data,
                            summary: forecast.daily.summary
                        },
                        hourly: {
                            data: forecast.hourly.data,
                            summary: forecast.hourly.summary
                        }
                    }
                };
                dispatch(fetchedDataHandler(forecastData));

                dispatch(setLoadingOff());
            }).catch(e => console.log(e));
    };
};