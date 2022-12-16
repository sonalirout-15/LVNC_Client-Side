import * as types from '../ActionTypes/PostActionTypes';

export const loadPostStart = (post) => ({
    type: types.LOAD_POST_START,
    payload : post
})

export const loadPostSuccess = (post) => ({
    type: types.LOAD_POST_SUCCESS,
    payload: post,
})

export const loadPostError = (error) => ({
    type: types.LOAD_POST_ERROR,
    payload: error
})