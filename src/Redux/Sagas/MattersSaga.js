import * as types from '../ActionTypes/MattersActionType';
import {
    put,
    fork,
    call,
    all,
    takeEvery,
} from "redux-saga/effects";
import { loadMattersApi } from '../APIS/MattersApi';
import { loadMattersError, loadMattersSuccess } from '../Actions/MattersAction';


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


export function* onLoadMatters() {
    yield takeEvery(types.LOAD_MATTERS_START, onLoadMattersStartAsync)
}



const mattersSagas = [
    fork(onLoadMatters),
]

export default function* mattersSaga() {
    yield all([...mattersSagas])
}