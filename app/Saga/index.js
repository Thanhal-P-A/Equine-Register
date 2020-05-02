
import { takeLatest, all } from 'redux-saga/effects';
import * as types from '../Types';
import ownerSaga from './ownerSaga';

export default function* watch() {
    yield all([takeLatest(types.OWNER_ADDRESS_REQUEST, ownerSaga)]);
}
