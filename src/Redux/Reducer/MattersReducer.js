import * as types from '../ActionTypes/MattersActionType';

const initialState = {
    matters: [],
    metterData: [],
    loading: false,
    error: null
}


const mattersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_MATTERS_START:
        case types.GET_SINGLE_METTERS_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_MATTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                matters: action.payload
            }
        case types.GET_SINGLE_METTERS_SUCCESS:
            return {
                    ...state,
                    loading: false,
                    metterData: action.payload
                }
        case types.LOAD_MATTERS_ERROR:
        case types.GET_SINGLE_METTERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default mattersReducer;