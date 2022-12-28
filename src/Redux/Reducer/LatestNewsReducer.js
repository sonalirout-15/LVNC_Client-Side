import * as types from '../ActionTypes/LatestNewsActionType';

const initialState = {
    latestNewsData: [],
    singlelatestNewsData: [],
    loading: false,
    error: null
}


const latestNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_LATEST_NEWS_START:
        case types.GET_SINGLE_LATEST_NEWS_START:
            return {
                ...state,
                loading: true,
            }
        case types.LOAD_LATEST_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                latestNewsData: action.payload,
            }
        case types.GET_SINGLE_LATEST_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                singlelatestNewsData: action.payload
            }
        case types.LOAD_LATEST_NEWS_ERROR:
        case types.GET_SINGLE_LATEST_NEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default latestNewsReducer;