import * as types from '../ActionTypes/ContactActionType';
    import {
        all,
        put,
        call,
        fork,
        takeLatest,
} from 'redux-saga/effects';
import Swal from 'sweetalert2';
import { conatctUsApi } from '../APIS/ContactApi';
import { contactUsError, contactUsSuccess } from '../Actions/ContactAction';
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
});

export function* onCreateContactUsStartAsync({ payload }) {
    try {
        const response = yield call(conatctUsApi, payload)
        if (response.data.message === "Success") {
            yield put(contactUsSuccess(response.data))
            Toast.fire({
                icon: "success",
                title: response.data.message
            })
        } else {
            Toast.fire({
                icon: "error",
                title: response.data.errors,
            });
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