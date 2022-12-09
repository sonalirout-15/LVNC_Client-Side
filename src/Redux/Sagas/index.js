import {all} from 'redux-saga/effects'
import categorySaga from './CategorySaga'
import postSaga from './PostSaga'
import subcategorySaga from './SubcategorySaga'
import userSaga from './UserSaga'

export default function* rootSaga(){
    yield all([
        userSaga(),
        categorySaga(),
        subcategorySaga(),
        postSaga()
    ])
}