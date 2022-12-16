import * as types from '../ActionTypes/ContactActionType';

const initialState = {
    contactUs :[],
    loading: false,
    error: null
}

const contactUsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_CONTACTUS_START:
            return {
                ...state,
                loading: true
            }
        case types.CREATE_CONTACTUS_SUCCESS:
            return {
                ...state,
                loading: true,
                contactUs : action.payload
            }
        case types.CREATE_CONTACTUS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default contactUsReducer;
