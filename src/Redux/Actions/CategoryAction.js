import * as types from '../ActionTypes/CategoryActionTypes';

export const loadCategoryStart = (categories) => ({
    type: types.LOAD_CATEGORY_START,
    payload: categories
})

export const loadCategorySuccess = (categories) => ({
    type: types.LOAD_CATEGORY_SUCCESS,
    payload: categories,
})

export const loadCategoryError = (error) => ({
    type: types.LOAD_CATEGORY_ERROR,
    payload: error
})