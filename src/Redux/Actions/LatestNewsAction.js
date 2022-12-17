import * as types from '../ActionTypes/LatestNewsActionType';

export const loadLatestNewsStart = (latestnewsData) => ({
    type: types.LOAD_LATEST_NEWS_START,
})

export const loadLatestNewsSuccess = (latestnewsData) => ({
    type: types.LOAD_LATEST_NEWS_SUCCESS,
    payload: latestnewsData,
})

export const loadLatestNewsError = (error) => ({
    type: types.LOAD_LATEST_NEWS_ERROR,
    payload: error
})