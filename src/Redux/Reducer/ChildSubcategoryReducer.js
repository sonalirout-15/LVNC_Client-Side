import * as types from '../ActionTypes/ChildSubcategoryActionType'

const initialState = {
    childSubcatgeory :[],
    childSubcategoryData : [],
    loading: false,
    error: null
}


const childSubcategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CHILD_SUBCATEGORY_START:
        case types.GET_SINGLE_CHILD_SUBCATEGORY_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_CHILD_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                childSubcatgeory: action.payload
            }
        case types.GET_SINGLE_CHILD_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                childSubcategoryData: action.payload
            }
        case types.LOAD_CHILD_SUBCATEGORY_ERROR:
        case types.GET_SINGLE_CHILD_SUBCATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default childSubcategoryReducer;