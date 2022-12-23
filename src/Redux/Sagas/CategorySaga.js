import * as types from '../ActionTypes/CategoryActionTypes';
import {
    takeLatest,
    put,
    fork,
    call,
    all,
    takeEvery
} from "redux-saga/effects";
import { getSingleCategoryApi, loadCategoryApi } from '../APIS/CategoryApi';
import {  getSingleCategoryError, getSingleCategorySuccess, loadCategoryError, loadCategorySuccess } from '../Actions/CategoryAction';

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

export function* onGetSingleCategoryStartAsync({ payload }) {
    try {
        const response = yield call(getSingleCategoryApi, payload);
        // console.log('Response~~~~~~~~~~~~', response.data)
        if (response.data.message === "Success") {
            yield put(getSingleCategorySuccess(response.data.categoryData))
        }
    } catch (error) {
        yield put(getSingleCategoryError(error.response))
    }
}


export function* onLoadCategory() {
    yield takeLatest(types.LOAD_CATEGORY_START, onLoadCategoryStartAsync)
}

export function* onGetSingleCategory() {
    yield takeEvery(types.GET_SINGLE_CATEGORY_START, onGetSingleCategoryStartAsync)
}


const categoriesSagas = [
    fork(onLoadCategory),
    fork(onGetSingleCategory),

]

export default function* categorySaga() {
    yield all([...categoriesSagas])
}