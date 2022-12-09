import * as types from '../ActionTypes/CategoryActionTypes';
import {
    takeLatest,
    put,
    fork,
    call,
    all,
} from "redux-saga/effects";
import { loadCategoryApi } from '../APIS/CategoryApi';
import { loadCategoryError, loadCategorySuccess } from '../Actions/CategoryAction';

export function* onLoadCategoryStartAsync() {
    try {
        const response = yield call(loadCategoryApi);

        if (response.data.message === "Success") {
            yield put(loadCategorySuccess(response.data))
        }
    } catch (error) {
        yield put(loadCategoryError(error.response))
    }
}


export function* onLoadCategory() {
    yield takeLatest(types.LOAD_CATEGORY_START, onLoadCategoryStartAsync)
}



const categoriesSagas = [
    fork(onLoadCategory),
]

export default function* categorySaga() {
    yield all([...categoriesSagas])
}