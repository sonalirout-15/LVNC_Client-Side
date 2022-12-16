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

export const getSingleCategoryStart = (categoryData) => ({
    type: types.GET_SINGLE_CATEGORY_START,
    payload: categoryData
})

export const getSingleCategorySuccess = (categoryData) => ({
    type: types.GET_SINGLE_CATEGORY_SUCCESS,
    payload: categoryData
})

export const getSingleCategoryError = (error) => ({
    type: types.GET_SINGLE_CATEGORY_ERROR,
    payload: error
})