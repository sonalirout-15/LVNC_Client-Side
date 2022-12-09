import {combineReducers} from 'redux';
import categoryReducer from './Reducer/CategoryReducer';
import postReducer from './Reducer/PostReducer';
import subcategoryReducer from './Reducer/SubcategoryReducer';
import userReducer from './Reducer/UserReducer';

const rootReducer = combineReducers({
    user : userReducer,
    category : categoryReducer,
    subcategory : subcategoryReducer,
    post : postReducer
})

export default rootReducer;