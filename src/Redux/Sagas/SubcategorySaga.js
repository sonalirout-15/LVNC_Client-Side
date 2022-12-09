import * as types from '../ActionTypes/SubcategoryActionTypes';
import {
    put,
    fork,
    call,
    all,
    takeEvery,
} from "redux-saga/effects";
import { loadSubcategoryApi } from '../APIS/SubcategoryApi';
import { loadSubcategoryError, loadSubcategorySuccess } from '../Actions/SubcategoryAction';

export function* onLoadSubcategoryStartAsync() {
    try {
        const response = yield call(loadSubcategoryApi);
        if (response.data.message === "Success") {
            yield put(loadSubcategorySuccess(response.data))
        }
    } catch (error) {
        yield put(loadSubcategoryError(error.response))
    }
}


export function* onLoadSubcategory() {
    yield takeEvery(types.LOAD_SUBCATEGORY_START, onLoadSubcategoryStartAsync)
}

const subcategoriesSagas = [
    fork(onLoadSubcategory),
]

export default function* subcategorySaga() {
    yield all([...subcategoriesSagas])
}