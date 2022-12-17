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

export const getSingleCategoryStart = (categoriesData) => ({
    type: types.GET_SINGLE_CATEGORY_START,
    payload: categoriesData
})

export const getSingleCategorySuccess = (categoriesData) => ({
    type: types.GET_SINGLE_CATEGORY_SUCCESS,
    payload: categoriesData
})

export const getSingleCategoryError = (error) => ({
    type: types.GET_SINGLE_CATEGORY_ERROR,
    payload: error
})