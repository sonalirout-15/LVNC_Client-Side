import * as types from '../ActionTypes/MattersActionType';

export const loadMattersStart = () => ({
    type: types.LOAD_MATTERS_START,
})

export const loadMattersSuccess = (matters) => ({
    type: types.LOAD_MATTERS_SUCCESS,
    payload: matters,
})

export const loadMattersError = (error) => ({
    type: types.LOAD_MATTERS_ERROR,
    payload: error
})