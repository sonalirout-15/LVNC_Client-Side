import * as types from '../ActionTypes/PostActionTypes';

const initialState = {
    post: [],
    loading: false,
    error: null
}


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_POST_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload
            }
        case types.LOAD_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default postReducer;