import { RSAA } from 'redux-api-middleware';
import types from './types';
import BASE_URI from '../../configs/URI';

export const getPingRequest = () => ({
  [RSAA]: {
    endpoint: `${BASE_URI}/ping`,
    method: 'GET',
    types: [types.FETCH_PING_REQUEST, types.FETCH_PING_SUCCESS, types.FETCH_PING_FAILURE]
  }
});

export default {
  getPingRequest
};
