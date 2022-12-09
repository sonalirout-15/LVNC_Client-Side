import * as types from '../ActionTypes/PostActionTypes';

export const loadPostStart = () => ({
    type: types.LOAD_POST_START,
})

export const loadPostSuccess = (post) => ({
    type: types.LOAD_POST_SUCCESS,
    payload: post,
})

export const loadPostError = (error) => ({
    type: types.LOAD_POST_ERROR,
    payload: error
})