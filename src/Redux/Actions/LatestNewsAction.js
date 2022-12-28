import * as types from '../ActionTypes/LatestNewsActionType';

export const loadLatestNewsStart = () => ({
    type : types.LOAD_LATEST_NEWS_START
})

export const loadLatestNewsSuccess = (latestNewsData) => ({
    type : types.LOAD_LATEST_NEWS_SUCCESS,
    payload : latestNewsData

})

export const loadLatestNewsError = (error) => ({
    type : types.LOAD_LATEST_NEWS_ERROR,
    payload : error
})


export const getSingleLatestNewsStart = (singlelatestNewsData) => ({
    type : types.GET_SINGLE_LATEST_NEWS_START,
    payload : singlelatestNewsData
})

export const getSingleLatestNewsSuccess = (singlelatestNewsData) => ({
    type : types.GET_SINGLE_LATEST_NEWS_SUCCESS,
    payload : singlelatestNewsData

})

export const getSingleLatestNewsError = (error) => ({
    type : types.GET_SINGLE_LATEST_NEWS_ERROR,
    payload : error
})