import * as types from '../ActionTypes/UserActionType';

export const userLoginStart = (user) => ({
    type: types.USER_LOGIN_START,
    payload: user,
});

export const userLoginSuccess = (user) => ({
    type: types.USER_LOGIN_SUCCESS,
    payload: user
});

export const userLoginError = (error) => ({
    type: types.USER_LOGIN_ERROR,
    payload: error,
});

export const userChangePasswordStart = (userChangePassword) => ({
    type: types.USER_CHANGE_PASSWORD_START,
    payload: userChangePassword
})
export const userChangePasswordSuccess = () => ({
    type: types.USER_CHANGE_PASSWORD_SUCCESS
})
export const userChangePasswordError = (error) => ({
    type: types.USER_CHANGE_PASSWORD_ERROR,
    payload: error
})

export const userResetPasswordStart = (userResetPassword) => ({
    type: types.USER_RESET_PASSWORD_START,
    payload: userResetPassword
})
export const userResetPasswordSuccess = () => ({
    type: types.USER_RESET_PASSWORD_SUCCESS
})
export const userResetPasswordError = (error) => ({
    type: types.USER_RESET_PASSWORD_ERROR,
    payload: error
})

export const userForgotPasswordStart = (userForgotPassword) => ({
    type: types.USER_FORGOT_PASSWORD_START,
    payload: userForgotPassword
})
export const userForgotPasswordSuccess = () => ({
    type: types.USER_FORGOT_PASSWORD_SUCCESS
})
export const userForgotPasswordError = (error) => ({
    type: types.USER_FORGOT_PASSWORD_ERROR,
    payload: error
})

export const userLogoutStart = () => ({
    type: types.USER_LOGOUT_START
});

export const userLogoutSuccess = () => ({
    type: types.USER_LOGOUT_SUCCESS,
});

export const userLogoutError = () => ({
    type: types.USER_LOGOUT_ERROR,
});


export const createUserStart = (user) => ({
    type: types.CREATE_USER_START,
    payload: user
})

export const createUserSuccess = () => ({
    type: types.CREATE_USER_SUCCESS,
})

export const createUserError = (error) => ({
    type: types.CREATE_USER_ERROR,
    payload: error
})



