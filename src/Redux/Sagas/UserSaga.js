import * as types from '../ActionTypes/UserActionType';
    import {
        all,
        put,
        call,
        fork,
        takeLatest,
} from 'redux-saga/effects';
import Swal from 'sweetalert2';
import { 
    createUserApi, 
    userChangePasswordApi, 
    userForgotPasswordApi, 
    userLoginApi, 
    userResetPasswordApi 
} from '../APIS/UserApi';
import { 
    createUserError, 
    createUserSuccess, 
    userChangePasswordError, 
    userChangePasswordSuccess, 
    userForgotPasswordError, 
    userForgotPasswordSuccess, 
    userLoginError, 
    userLoginSuccess, 
    userLogoutError, 
    userLogoutStart, 
    userLogoutSuccess, 
    userResetPasswordError, 
    userResetPasswordSuccess 
} from '../Actions/UserAction';

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
})

export function* onUserLoginStartAsync({ payload }) {
    try {
        const response = yield call(userLoginApi, payload);
        if (response.data.status === 200) {
            localStorage.setItem("USER", response.data.data.token)
            yield put(userLoginSuccess(response.data));
            Toast.fire({
                icon: "success",
                title: response.data.message,
            });
            }
    } catch (error) {
        yield put(userLoginError(error.response));
        Toast.fire({
            icon: "error",
            title: error.response.data.message,
        });
    }
}

export function* onUserChangePasswordStartAsync({ payload }) {
    try {
        const response = yield call(userChangePasswordApi, payload);
        console.log('RESPONSE~~~~~~~~~~~>>>', response.data)
        if (response.data.status === 200) {
            yield put(userChangePasswordSuccess(response.data))
            Toast.fire({
                icon: "success",
                title: response.data.message,
            });
        } 
        
    } catch (error) {
        yield put(userChangePasswordError(error.response))
            Toast.fire({
                icon: "error",
                title: error.response.data.message,
            });       
    }
}

export function* onUserResetPasswordStartAsync({ payload }) {
    try {
        const response = yield call(userResetPasswordApi, payload);
        if (response.data.status === 200) {
            yield put(userResetPasswordSuccess(response.data))
            Toast.fire({
                icon: "success",
                title: response.data.message,
            });
        }
    } catch (error) {
        yield put(userResetPasswordError(error.response))
            Toast.fire({
                icon: "error",
                title: error.response.data.message,
            });
       
    }
}

export function* onUserForgotPasswordStartAsync({ payload }) {
    try {
        const response = yield call(userForgotPasswordApi, payload);
        if (response.data.status === 200) {
            yield put(userForgotPasswordSuccess(response.data))
            Toast.fire({
                icon: "success",
                title: response.data.message,
            });
        } 
        
    } catch (error) {
        yield put(userForgotPasswordError(error.response))
        if(error.response.data.errors.email) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.email,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.message,
            });
        }
    }
}

// export function* onUserLogoutStartAsync() {
//     try {
//         localStorage.removeItem("USER")
//         const response = yield call(userLogoutStart)
//         if (response.data.status === 200) {
//             yield put(userLogoutSuccess(response.data))
//             Toast.fire({
//                 icon: "success",
//                 title: response.data.message,
//             });
//         } else {
//             Toast.fire({
//                 icon: "error",
//                 title: response.data.message,
//             });
//         }
//     } catch (error) {
//         yield put(userLogoutError(error.response))
//     }
// }

export function* onCreateUserStartAsync({ payload }) {
    try {
        const response = yield call(createUserApi, payload)
        console.log('Response~~~~~~~~~~~~~~~>>>', response.data)
        if (response.data.status === 200) {
            yield put(createUserSuccess(response.data))
            Toast.fire({
                icon: "success",
                title: response.data.message,
            })
        }
    } catch (error) {
        yield put(createUserError(error.response))
        if(error.response.data.errors.username) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.username,
            });
        } else if (error.response.data.errors.email) {
            console.log(error.response)
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.email,
            });
        } else if(error.response.data.errors.password) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.password,
            });
        } else if(error.response.data.errors.confirm_password) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.confirm_password,
            });
        } else if(error.response.data.errors.phonenumber) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.phonenumber,
            });
        } else if(error.response.data.errors.address){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.address,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.message,
            });
        }
    }
}


export function* onUserLogin() {
    yield takeLatest(types.USER_LOGIN_START, onUserLoginStartAsync)
}

export function* onUserChangePassword() {
    yield takeLatest(types.USER_CHANGE_PASSWORD_START, onUserChangePasswordStartAsync);
}

export function* onUserResetPassword() {
    yield takeLatest(types.USER_RESET_PASSWORD_START, onUserResetPasswordStartAsync);
}

export function* onUserForgotPassword() {
    yield takeLatest(types.USER_FORGOT_PASSWORD_START, onUserForgotPasswordStartAsync);
}

// export function* onUserLogout() {
//     yield takeLatest(types.USER_LOGOUT_START, onUserLogoutStartAsync);
// }

export function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync)
}

const userSagas = [
    fork(onUserLogin),
    fork(onUserChangePassword),
    fork(onUserResetPassword),
    fork(onUserForgotPassword),
    // fork(onUserLogout),
    fork(onCreateUser),
]

export default function* userSaga() {
    yield all([...userSagas])
}