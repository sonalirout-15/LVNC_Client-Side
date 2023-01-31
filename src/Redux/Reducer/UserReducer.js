import * as types from '../ActionTypes/UserActionType';

const initialState = {
    user: [],
    userLogin: [],
    loading: false,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN_START:
        case types.USER_CHANGE_PASSWORD_START:
        case types.USER_RESET_PASSWORD_START:
        case types.USER_FORGOT_PASSWORD_START:
        case types.USER_LOGOUT_START:
        case types.CREATE_USER_START:
            return {
                ...state,
                loading: true
            }
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userLogin: action.payload
            }
        case types.CREATE_USER_SUCCESS: 
            return{
                ...state,
                loading: false,
                user : action.payload
            }
        case types.USER_CHANGE_PASSWORD_SUCCESS:
        case types.USER_RESET_PASSWORD_SUCCESS:
        case types.USER_FORGOT_PASSWORD_SUCCESS:
        case types.USER_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: true
            }
        case types.USER_LOGIN_ERROR:
        case types.USER_CHANGE_PASSWORD_ERROR:
        case types.USER_RESET_PASSWORD_ERROR:
        case types.USER_FORGOT_PASSWORD_ERROR:
        case types.USER_LOGOUT_ERROR:
        case types.CREATE_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
