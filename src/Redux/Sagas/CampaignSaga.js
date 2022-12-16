import * as types from '../ActionTypes/CampaignActionType';
import {
    put,
    fork,
    call,
    all,
    takeEvery,
} from "redux-saga/effects";
import { loadCampaingApi } from '../APIS/CampaignApi';
import { loadCampaingError, loadCampaingSuccess } from '../Actions/CampaignAction';



export function* onLoadCampaingStartAsync() {
    try {
        const response = yield call(loadCampaingApi);
        if (response.data.message === "Success") {
            yield put(loadCampaingSuccess(response.data))
        }
    } catch (error) {
        yield put(loadCampaingError(error.response))
    }
}

export function* onLoadCampaing() {
    yield takeEvery(types.LOAD_CAMPAIGN_START, onLoadCampaingStartAsync)
}


const campaingSagas = [
    fork(onLoadCampaing),
]

export default function* campaingSaga() {
    yield all([...campaingSagas])
}