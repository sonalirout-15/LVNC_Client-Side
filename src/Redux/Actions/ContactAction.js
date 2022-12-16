import * as types from '../ActionTypes/ContactActionType';

export const contactUsStart = (contactUser) => ({
    type: types.CREATE_CONTACTUS_START,
    payload: contactUser
})

export const contactUsSuccess = (contactUser) => ({
    type: types.CREATE_CONTACTUS_SUCCESS,
})

export const contactUsError = (error) => ({
    type: types.CREATE_CONTACTUS_ERROR,
    payload: error
})