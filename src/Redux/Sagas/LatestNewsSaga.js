import * as types from '../ActionTypes/LatestNewsActionType';
import {
    put,
    fork,
    call,
    all,
    takeEvery,
} from "redux-saga/effects";
import { loadLatestNewsApi } from '../APIS/LatestNewsApi';
import { loadLatestNewsError, loadLatestNewsSuccess } from '../Actions/LatestNewsAction';

export function* onLoadLatestNewsStartAsync() {
    try {
        const response = yield call(loadLatestNewsApi);
        if (response.status === 200) {
            yield put(loadLatestNewsSuccess(response.data))
        }
    } catch (error) {
        yield put(loadLatestNewsError(error.response))
    }
}


export function* onLoadLatestNews() {
    yield takeEvery(types.LOAD_LATEST_NEWS_START, onLoadLatestNewsStartAsync)
}



const latestNewsSagas = [
    fork(onLoadLatestNews),

]

export default function* latestNewsSaga() {
    yield all([...latestNewsSagas])
}