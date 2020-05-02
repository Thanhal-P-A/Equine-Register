
import createReducer from './createReducer';
import * as types from '../Types';

const initialState = {
    ownerAddressArray:[],
    ownerPostCode:''
};

const ownerReducer = createReducer(initialState, {

    [types.OWNER_ADDRESS_RESPONSE](state, action) {
        return {
            ...state,
            ownerAddressArray:action.response,
            ownerPostCode:action.payload
        };
    }

});

export default ownerReducer;