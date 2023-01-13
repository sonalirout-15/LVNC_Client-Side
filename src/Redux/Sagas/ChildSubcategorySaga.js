import * as types from '../ActionTypes/ChildSubcategoryActionType';
import {
    takeLatest,
    put,
    fork,
    call,
    all,
    takeEvery,
} from "redux-saga/effects";

import { getSingleChildSubcategoryApi, loadChildSubcategoryApi } from '../APIS/ChildSubcategoryApi';
import { getSingleChildSubcategoryError, getSingleChildSubcategorySuccess, loadChildSubcategoryError, loadChildSubcategorySuccess, } from '../Actions/ChildSubcategoryAction';



export function* onLoadChildSubcategoryStartAsync() {
    try {
        const response = yield call(loadChildSubcategoryApi);
        if (response.data.message === "Success") {
            // console.log('RESPONSE~~~~~~~~~~~????>>>>', response.data.categoryData);
            yield put(loadChildSubcategorySuccess(response.data.categoryData))
        }
    } catch (error) {
        yield put(loadChildSubcategoryError(error.response))
    }
}

export function* onGetSingleChildSubcategoryStartAsync({ payload }) {
    try {
        const response = yield call(getSingleChildSubcategoryApi, payload);
        if (response.data.message === "Success") {
            yield put(getSingleChildSubcategorySuccess(response.data?.categoryData))
        }
    } catch (error) {
        yield put(getSingleChildSubcategoryError(error.response.data))
    }
}




export function* onLoadChildSubcategory() {
    yield takeEvery(types.LOAD_CHILD_SUBCATEGORY_START, onLoadChildSubcategoryStartAsync)
}


export function* onGetSingleChildSubcategory() {
    yield takeLatest(types.GET_SINGLE_CHILD_SUBCATEGORY_START, onGetSingleChildSubcategoryStartAsync)
}



const childSubcategoriesSagas = [
    fork(onLoadChildSubcategory),
    fork(onGetSingleChildSubcategory),
]

export default function* childSubcategorySaga() {
    yield all([...childSubcategoriesSagas])
}