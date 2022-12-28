import * as types from '../ActionTypes/BannerImageActionType';
import {
    put,
    fork,
    call,
    all,
    takeEvery,
} from "redux-saga/effects";
import { loadBannerImageApi } from '../APIS/BannerImageApi';
import { loadBannerImageError, loadBannerImageSuccess } from '../Actions/BannerImageAction';



export function* onLoadBannerImageStartAsync() {
    try {
        const response = yield call(loadBannerImageApi);
        if (response.data.message === "Success") {
            yield put(loadBannerImageSuccess(response.data))
        }
    } catch (error) {
        yield put(loadBannerImageError(error.response))
    }
}

export function* onLoadBannerImage() {
    yield takeEvery(types.LOAD_BANNER_IMAGE_START, onLoadBannerImageStartAsync)
}


const bannerImageSagas = [
    fork(onLoadBannerImage),
]

export default function* bannerImageSaga() {
    yield all([...bannerImageSagas])
}