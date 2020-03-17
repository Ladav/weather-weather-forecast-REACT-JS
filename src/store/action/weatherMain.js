import * as actionTypes from './actionTypes';

export const unitChanged = (unit) => {
    return { type: actionTypes.UNIT_CHANGED, unit};
};