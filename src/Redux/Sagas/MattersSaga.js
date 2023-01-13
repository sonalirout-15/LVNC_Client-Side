import * as types from '../ActionTypes/MattersActionType';
import {
    put,
    fork,
    call,
    all,
    takeEvery,
} from "redux-saga/effects";
import { loadMattersApi, getSingleMettersApi } from '../APIS/MattersApi';
import { loadMattersError, loadMattersSuccess , getSingleMettersSuccess, getSingleMettersError} from '../Actions/MattersAction';


export function* onLoadMattersStartAsync() {
    try {
        const response = yield call(loadMattersApi);

        if (response.data.message === "Success") {
            yield put(loadMattersSuccess(response.data))
        }
    } catch (error) {
        yield put(loadMattersError(error.response))
    }
}

export function* onGetSingleMettersStartAsync({ payload }) {
    try {
        const response = yield call(getSingleMettersApi, payload);
        if (response.data.message === "Success") {
            yield put(getSingleMettersSuccess(response.data.metterData))
        }
    } catch (error) {
        yield put(getSingleMettersError(error.response))
    }
}

export function* onLoadMatters() {
    yield takeEvery(types.LOAD_MATTERS_START, onLoadMattersStartAsync)
}

export function* onGetSingleMetters() {
    yield takeEvery(types.GET_SINGLE_METTERS_START, onGetSingleMettersStartAsync)
}


const mattersSagas = [
    fork(onLoadMatters),
    fork(onGetSingleMetters),
]

export default function* mattersSaga() {
    yield all([...mattersSagas])
}