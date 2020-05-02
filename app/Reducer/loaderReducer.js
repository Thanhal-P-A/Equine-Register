/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from './createReducer';
import * as types from '../Types';

const initialState = {
    isLoading: false
};

const loaderReducer = createReducer(initialState, {

    [types.ENABLE_LOADER](state) {
        return { ...state, isLoading: true };
    },
    
    [types.DISABLE_LOADER](state) {
        return { ...state, isLoading: false };
    }

});

export default loaderReducer;