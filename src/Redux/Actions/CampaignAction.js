import * as types from '../ActionTypes/CampaignActionType';

export const loadCampaingStart = () => ({
    type: types.LOAD_CAMPAIGN_START,
})

export const loadCampaingSuccess = (campaing) => ({
    type: types.LOAD_CAMPAIGN_SUCCESS,
    payload: campaing,
})

export const loadCampaingError = (error) => ({
    type: types.LOAD_CAMPAIGN_ERROR,
    payload: error
})