import * as actionTypes from './actionTypes';
import axios from 'axios';

import image from '../../assets/image';

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

export const searchButtonClicked = () => {
    return (dispatch, getState) => {
        dispatch(setLoadingOn());
        axios.get(`https://ladav-weatherly.herokuapp.com/weather?address=${getState().search}&unit=${getState().temperature.unit}`)
            .then((res) => {
                if (res.data.error) {
                    throw new Error(res.data.error);
                }
                
                const forecast = res.data.forecast;
                const coverImage = image[forecast.currently.icon];
                console.log(forecast);
                const forecastData = {
                    temperature: forecast.currently.temperature|0,
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
                    },
                    image: coverImage
                };
                dispatch(fetchedDataHandler(forecastData));
                dispatch(setLoadingOff());
            }).catch(e => {
                dispatch(setLoadingOff());
            });
        };
};

export const unitChanged = (unit) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.UNIT_CHANGED, unit});
        dispatch(searchButtonClicked());
    };
};