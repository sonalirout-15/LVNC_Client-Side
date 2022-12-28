import * as types from '../ActionTypes/BannerImageActionType';

export const loadBannerImageStart = () => ({
    type: types.LOAD_BANNER_IMAGE_START,
})

export const loadBannerImageSuccess = (bannerImageData) => ({
    type: types.LOAD_BANNER_IMAGE_SUCCESS,
    payload: bannerImageData,
})

export const loadBannerImageError = (error) => ({
    type: types.LOAD_BANNER_IMAGE_ERROR,
    payload: error
})