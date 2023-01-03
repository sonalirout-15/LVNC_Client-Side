import {combineReducers} from 'redux';
import bannerImageReducer from './Reducer/BannerImageReducer';
import campaignReducer from './Reducer/CampaignReducer';
import categoryReducer from './Reducer/CategoryReducer';
import childSubcategoryReducer from './Reducer/ChildSubcategoryReducer';
import contactUsReducer from './Reducer/ContactReducer';
import latestNewsReducer from './Reducer/LatestNewsReducer';
import mattersReducer from './Reducer/MattersReducer';
import postReducer from './Reducer/PostReducer';
import subcategoryReducer from './Reducer/SubcategoryReducer';
import userReducer from './Reducer/UserReducer';

const rootReducer = combineReducers({
    user : userReducer,
    categoryData : categoryReducer,
    subcategory : subcategoryReducer,
    childSubcategory : childSubcategoryReducer,
    post : postReducer,
    campaign : campaignReducer,
    matters : mattersReducer,
    contactUs : contactUsReducer,
    latestnews : latestNewsReducer,
    bannerImage : bannerImageReducer
})

export default rootReducer;