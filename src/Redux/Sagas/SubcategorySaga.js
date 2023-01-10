import * as types from '../ActionTypes/SubcategoryActionType'
import {
    takeLatest,
    put,
    fork,
    call,
    all,
} from "redux-saga/effects";
import { getSingleSubcategoryError, getSingleSubcategorySuccess, loadSubcategoryError, loadSubcategorySuccess } from '../Actions/SubcategoryAction';
import { getSingleSubcategoryApi, loadSubcategoryApi } from '../APIS/SubcatgeoryApi';

export function* onLoadSubcategoryStartAsync() {
    try {
        const response = yield call(loadSubcategoryApi);
        if (response.data.message === 'Success') {
            // console.log('RESPONSE~~~~~~~~~~~~~~~~~~~~~~>', response.data.categoryData)
            yield put(loadSubcategorySuccess(response.data.categoryData))
        }
    } catch (error) {
        yield put(loadSubcategoryError(error.response))
        
    }
}


export function* onGetSingleSubcategoryStartAsync({ payload }) {
    try {
        const response = yield call(getSingleSubcategoryApi, payload);
        if (response.data.message === "Success") {
            yield put(getSingleSubcategorySuccess(response.data?.categoryData))
        }
    } catch (error) {
        yield put(getSingleSubcategoryError(error.response.data))
    }
}

export function* onLoadSubcategory() {
    yield takeLatest(types.LOAD_SUBCATEGORY_START, onLoadSubcategoryStartAsync)
}

export function* onGetSingleSubcategory() {
    yield takeLatest(types.GET_SINGLE_SUBCATEGORY_START, onGetSingleSubcategoryStartAsync)
}


const subcategoriesSagas = [
    fork(onLoadSubcategory),
    fork(onGetSingleSubcategory),
]

export default function* subcategorySaga() {
    yield all([...subcategoriesSagas])
}