import * as types from '../Types';

export function ownerAddressRequest(payload) {
  return {
    type: types.OWNER_ADDRESS_REQUEST,
    payload,
  };
}

export function ownerAddressResponse(response, payload) {
  return {
    type: types.OWNER_ADDRESS_RESPONSE,
    response,
    payload,
  };
}
