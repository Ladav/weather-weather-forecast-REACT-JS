import * as actionTypes from '../action/actionTypes';
import image from '../../assets/image/cloudy.jpg';
const intialState = {
    search: '',
    location: {
        latitude: '',
        longitude: '',
        name: 'Earth • Universe'
    },
    weather: {
        currently: {
            temperature: '0',
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
    error: {
        value: '',
        status: false
    },
    temperature : {
        celsius: 0,
        fahrenheit: 0,
        unit: 'si' // si Celsius / us Fahrenheit
    },
    loading: false,
    dataAvailable: false,
    image: null
};

const reducer = (state = intialState, action) => {
    if (action.type === actionTypes.SEARCH_VAL_CHANGED) {
        return {
            ...state,
            search: action.val
        };
    }
    if (action.type === actionTypes.FETCH_DATA) {
        console.log(action.weather)
        return {
            ...state,
            location: {
                ...state.location,
                ...action.location
            },
            weather: {
                ...state.weather,
                ...action.weather
            },
            temperature : {
                ...state.temperature,
                celsius: action.temp.celsius,
                fahrenheit: action.temp.fahrenheit
            },
            dataAvailable: true,
            image: action.image
        };
    }
    if (action.type === actionTypes.UNIT_CHANGED) {
        return {
            ...state,
            temperature: {
                ...state.temperature,
                unit: action.unit
            }
        };
    }
    if (action.type === actionTypes.ERROR_OCCUR) {
        return {
            ...state,
            error: {
                value: action.error,
                status: true    // set it to false when already handled
            }
        };
    }
    if (action.type === actionTypes.LOADING_OFF) {
        return {
            ...state,
            loading: false
        };
    }
    if (action.type === actionTypes.LOADING_ON) {
        return {
            ...state,
            loading: true
        };
    }

    return state;
};

export default reducer;