import {combineReducers} from 'redux';
import campaignReducer from './Reducer/CampaignReducer';
import categoryReducer from './Reducer/CategoryReducer';
import contactUsReducer from './Reducer/ContactReducer';
import mattersReducer from './Reducer/MattersReducer';
import postReducer from './Reducer/PostReducer';
import userReducer from './Reducer/UserReducer';

const rootReducer = combineReducers({
    user : userReducer,
    category : categoryReducer,
    post : postReducer,
    campaign : campaignReducer,
    matters : mattersReducer,
    contactUs : contactUsReducer
})

export default rootReducer;