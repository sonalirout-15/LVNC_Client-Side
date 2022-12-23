import * as types from '../ActionTypes/SubcategoryActionType';

export const getSingleSubcategoryStart = (cateData) => ({
    type: types.GET_SINGLE_SUBCATEGORY_START,
    payload: cateData
})

export const getSingleSubcategorySuccess = (cateData) => ({
    type: types.GET_SINGLE_SUBCATEGORY_SUCCESS,
    payload: cateData
})

export const getSingleSubcategoryError = (error) => ({
    type: types.GET_SINGLE_SUBCATEGORY_ERROR,
    payload: error
})


export const loadSubcategoryStart = (subcategories) => ({
    type: types.LOAD_SUBCATEGORY_START,
    payload : subcategories
})

export const loadSubcategorySuccess = (subcategories) => ({
    type: types.LOAD_SUBCATEGORY_SUCCESS,
    payload: subcategories
})

export const loadSubcategoryError = (error) => ({
    type: types.LOAD_SUBCATEGORY_ERROR,
    payload: error
})