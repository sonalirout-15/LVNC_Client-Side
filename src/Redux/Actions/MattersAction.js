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

export const getSingleMettersStart = (metterData) => ({
    type: types.GET_SINGLE_METTERS_START,
    payload: metterData
})

export const getSingleMettersSuccess = (metterData) => ({
    type: types.GET_SINGLE_METTERS_SUCCESS,
    payload: metterData
})

export const getSingleMettersError = (error) => ({
    type: types.GET_SINGLE_METTERS_ERROR,
    payload: error
})