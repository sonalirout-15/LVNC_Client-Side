import * as types from '../ActionTypes/SubcategoryActionType'

const initialState = {
    subcategories: [],
    categoryData: [],
    catgories: [],
    cateData: [],
    loading: false,
    error: null
}


const subcategoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_SINGLE_SUBCATEGORY_START:
        case types.LOAD_SUBCATEGORY_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_SUBCATEGORY_SUCCESS:
                return{
                    ...state,
                    loading : false,
                    subcategories: action.payload
                }
        case types.GET_SINGLE_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                cateData: action.payload
            }
        case types.GET_SINGLE_SUBCATEGORY_ERROR:
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