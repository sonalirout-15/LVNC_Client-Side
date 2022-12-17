import * as types from '../ActionTypes/CategoryActionTypes';

const initialState = {
    categories: [],
    categoriesData: [],
    Subcategories: [],
    loading: false,
    error: null
}


const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CATEGORY_START:
        case types.GET_SINGLE_CATEGORY_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        case types.GET_SINGLE_CATEGORY_SUCCESS:
            return{
                ...state,
                loading : false,
                categoriesData : action.payload
            }  
        case types.LOAD_CATEGORY_ERROR:
        case types.GET_SINGLE_CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default categoryReducer;