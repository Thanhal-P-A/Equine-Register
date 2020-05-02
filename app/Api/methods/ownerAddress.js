import Api from '../index';
import ApiConstants from '../apiConstants';

export default function ownerAddress(payload) {
    return Api(
        encodeURIComponent(payload)+ApiConstants.GET_PARAMS,
        null,
        'get',
        null
    );
}
