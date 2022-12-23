import { takeEvery, put } from "redux-saga/effects";
import { CATEGORY_SEARCH } from '../ActionTypes/SearchActionType'

 function* categorySearch(data){
    let result = yield fetch(`http://localhost:8080/api/categories?q=${data.query}`)
    result = yield result.json();
    console.warn('action called', data)
    yield put({ type: CATEGORY_SEARCH, data: result})
}

function*  categorySearchSaga(){
    yield takeEvery(CATEGORY_SEARCH, categorySearch)
}

export default categorySearchSaga;