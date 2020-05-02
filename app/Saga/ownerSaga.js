
import { put, call } from 'redux-saga/effects';
import Toast from 'react-native-simple-toast';

import ownerAddress from '../Api/methods/ownerAddress';
import * as ownerActions from '../Action/ownerAction';
import * as loadingActions from '../Action/loadingAction';

export default function* ownerAsync(action) {

    yield put(loadingActions.enableLoader());

    const response = yield call(ownerAddress,action.payload);
    
    if (Array.isArray(response)) {
        yield put(ownerActions.ownerAddressResponse(response,action.payload));
        yield put(loadingActions.disableLoader({}));
    } else {
        Toast.show("Something went wrong")
        yield put(loadingActions.disableLoader({}));
    }
}
