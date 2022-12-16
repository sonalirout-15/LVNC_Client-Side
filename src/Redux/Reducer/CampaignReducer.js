import * as types from '../ActionTypes/CampaignActionType';

const initialState = {
    campaning: [],
    loading: false,
    error: null
}


const campaignReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CAMPAIGN_START:
            return {
                ...state,
                loading: true,
            }
        case types.LOAD_CAMPAIGN_SUCCESS:
            return {
                ...state,
                loading: false,
                campaning: action.payload,
            }
        case types.LOAD_CAMPAIGN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default campaignReducer;