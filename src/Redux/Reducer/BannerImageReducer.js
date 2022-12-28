import * as types from '../ActionTypes/BannerImageActionType';

const initialState = {
    bannerImageData: [],
    loading: false,
    error: null
}


const bannerImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_BANNER_IMAGE_START:
            return {
                ...state,
                loading: true,
            }
        case types.LOAD_BANNER_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                bannerImageData: action.payload,
            }
        case types.LOAD_BANNER_IMAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default bannerImageReducer;