import {all} from 'redux-saga/effects'
import campaingSaga from './CampaignSaga'
import categorySaga from './CategorySaga'
import contactUsSaga from './ContactSaga'
import latestNewsSaga from './LatestNewsSaga'
import mattersSaga from './MattersSaga'
import postSaga from './PostSaga'
import userSaga from './UserSaga'

export default function* rootSaga(){
    yield all([
        userSaga(),
        categorySaga(),
        postSaga(),
        campaingSaga(),
        mattersSaga(),
        contactUsSaga(),
        latestNewsSaga()
    ])
}