import * as types from '../ActionTypes/LatestNewsActionType';
import {
    put,
    fork,
    call,
    all,
    takeEvery,
} from "redux-saga/effects";
import { getSingleLatestNewsError, getSingleLatestNewsSuccess, loadLatestNewsError, loadLatestNewsSuccess } from '../Actions/LatestNewsAction';
import { getSingleLatestNewsApi, loadLatestNewsApi } from '../APIS/LatestNewsApi';


export function* onLoadLatestNewsStartAsync() {
    try {
        const response = yield call(loadLatestNewsApi);
        if (response.status === 200) {
            // console.log('RESPONSE~~~~~~~~~~~~~', response.data?.latestnewsData)
            yield put(loadLatestNewsSuccess(response.data.latestnewsData))
        }
    } catch (error) {
        yield put(loadLatestNewsError(error.response))
    }
}

export function* onGetSingleLatestNewsStartAsync({ payload }) {
    try {
        const response = yield call(getSingleLatestNewsApi, payload);
        console.log('PAYLOAD~~~~~~~~~~~>', payload)
        if (response.data.status === 200) {
            console.log('RESPONSE~~~~~~~~~~~>', response.data)
            yield put(getSingleLatestNewsSuccess(response.data))
        }
    } catch (error) {
        yield put(getSingleLatestNewsError(error.response))
    }
}

export function* onLoadLatestNews() {
    yield takeEvery(types.LOAD_LATEST_NEWS_START, onLoadLatestNewsStartAsync)
}

export function* onGetSingleLatestNews() {
    yield takeEvery(types.GET_SINGLE_LATEST_NEWS_START, onGetSingleLatestNewsStartAsync)
}

const latestNewsSagas = [
    fork(onLoadLatestNews),
    fork(onGetSingleLatestNews),
]

export default function* latestNewsSaga(){
    yield all([...latestNewsSagas])
}