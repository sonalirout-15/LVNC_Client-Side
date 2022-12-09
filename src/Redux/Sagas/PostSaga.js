import * as types from '../ActionTypes/PostActionTypes';
import {
    put,
    fork,
    call,
    all,
    takeEvery,
} from "redux-saga/effects";
import { loadPostApi } from '../APIS/PostApi';
import { loadPostError, loadPostSuccess } from '../Actions/PostActions';



export function* onLoadPostStartAsync() {
    try {
        const response = yield call(loadPostApi);
        if (response.data.message === "Success") {
            yield put(loadPostSuccess(response.data.postData))
        }
    } catch (error) {
        yield put(loadPostError(error.response))
    }
}


export function* onLoadPost() {
    yield takeEvery(types.LOAD_POST_START, onLoadPostStartAsync)
}

const postSagas = [
    fork(onLoadPost),
]

export default function* postSaga() {
    yield all([...postSagas])
}