import * as types from '../ActionTypes/ContactActionType';
    import {
        all,
        put,
        call,
        fork,
        takeLatest,
} from 'redux-saga/effects';
import { conatctUsApi } from '../APIS/ContactApi';
import { contactUsError, contactUsSuccess } from '../Actions/ContactAction';

export function* onCreateContactUsStartAsync({ payload }) {
    try {
        const response = yield call(conatctUsApi, payload)
        console.log('PAYLOAD~~~~~~', response.data)
        if (response.data.message === "Success") {
            yield put(contactUsSuccess(response.data))
        }
    } catch (error) {
        yield put(contactUsError(error.response.data))
    }
}


export function* onCreateContactUs() {
    yield takeLatest(types.CREATE_CONTACTUS_START, onCreateContactUsStartAsync)
}

const contactUsSagas = [
    fork(onCreateContactUs),
]

export default function* contactUsSaga() {
    yield all([...contactUsSagas])
}