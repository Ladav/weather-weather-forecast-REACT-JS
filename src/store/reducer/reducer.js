import * as actionTypes from '../action/actionTypes';
import { updateObject } from '../utility';

import image from '../../assets/image';

const intialState = {
    search: '',
    location: {
        latitude: '',
        longitude: '',
        name: 'Earth • Universe'
    },
    weather: {
        currently: {
            summary: '',
            precipProbability: ''
        },
        daily: {
            data: [],
            summary: ''
        },
        hourly: {
            data: [],
            summary: ''
        }
    },
    temperature: {
        value: 0,
        unit: 'si' // si Celsius / us Fahrenheit
    },
    loading: false,
    dataAvailable: false,
    image: image['partly-cloudy-night']
};

const searchValueChanged = (state, action) => {
    return updateObject(state, { search: action.val });
};
const fetchData = (state, action) => {
    const updatedLocation = updateObject(state.location, { ...action.location });
    const updatedWeather = updateObject(state.weather, { ...action.weather });
    const updatedTemperature = updateObject(state.temperature, { value: action.temperature });
    return updateObject(state, {
        location: updatedLocation,
        weather: updatedWeather,
        temperature: updatedTemperature,
        dataAvailable: true,
        image: action.image
    });
};
const unitChanged = (state, action) => {
    const updatedTemperature = updateObject(state.temperature, { unit: action.unit });
    return updateObject(state, { temperature: updatedTemperature });
};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_VAL_CHANGED: return searchValueChanged(state, action);
        case actionTypes.FETCH_DATA: return fetchData(state, action);
        case actionTypes.UNIT_CHANGED: return unitChanged(state, action);
        case actionTypes.LOADING_OFF: return updateObject(state, { loading: false });
        case actionTypes.LOADING_ON: return updateObject(state, { loading: true });
        default: return state;
    }
};

export default reducer;