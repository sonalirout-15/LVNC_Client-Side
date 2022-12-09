import * as types from '../ActionTypes/SubcategoryActionTypes';

const initialState = {
    subcategories: [],
    loading: false,
    error: null
}


const subcategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_SUBCATEGORY_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                subcategories: action.payload
            }
        case types.LOAD_SUBCATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default subcategoryReducer;