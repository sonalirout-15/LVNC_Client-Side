import * as types from '../ActionTypes/SubcategoryActionTypes';

export const loadSubcategoryStart = () => ({
    type: types.LOAD_SUBCATEGORY_START,
})

export const loadSubcategorySuccess = (subcategories) => ({
    type: types.LOAD_SUBCATEGORY_SUCCESS,
    payload: subcategories
})

export const loadSubcategoryError = (error) => ({
    type: types.LOAD_SUBCATEGORY_ERROR,
    payload: error
})