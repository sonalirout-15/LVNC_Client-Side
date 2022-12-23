import { CATEGORY_SEARCH } from '../ActionTypes/SearchActionType'


export const categorySearch = (query) => {
    return  {
        type : CATEGORY_SEARCH,
        query
    }
}