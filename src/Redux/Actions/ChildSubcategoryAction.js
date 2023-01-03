import * as types from '../ActionTypes/ChildSubcategoryActionType';

export const loadChildSubcategoryStart = (childSubcatgeory) => ({
    type: types.LOAD_CHILD_SUBCATEGORY_START,
    payload: childSubcatgeory
})

export const loadChildSubcategorySuccess = (childSubcatgeory) => ({
    type: types.LOAD_CHILD_SUBCATEGORY_SUCCESS,
    payload: childSubcatgeory,
})

export const loadChildSubcategoryError = (error) => ({
    type: types.LOAD_CHILD_SUBCATEGORY_ERROR,
    payload: error
})


export const getSingleChildSubcategoryStart = (childSubcategoryData) => ({
    type: types.GET_SINGLE_CHILD_SUBCATEGORY_START,
    payload: childSubcategoryData
})

export const getSingleChildSubcategorySuccess = (childSubcategoryData) => ({
    type: types.GET_SINGLE_CHILD_SUBCATEGORY_SUCCESS,
    payload: childSubcategoryData
})

export const getSingleChildSubcategoryError = (error) => ({
    type: types.GET_SINGLE_CHILD_SUBCATEGORY_ERROR,
    payload: error
})