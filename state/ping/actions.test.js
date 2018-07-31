import { apiMiddleware, RequestError } from 'redux-api-middleware';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
// import fetchMock from 'fetch-mock';
import { getPingRequest } from './actions';
import types from './types';

const mockStore = configureMockStore([thunkMiddleware, apiMiddleware]);

const fetchMock = require('fetch-mock');

// describe unit
describe('getPingRequest() async action creator', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches FETCH_PING_FAILURE action on failed request', done => {
    const apiResponse = {
      message: 'Unexpected token <'
    };

    fetchMock.mock('http://localhost:8080/ping', 500, apiResponse);

    const expectedActions = [
      {
        type: types.FETCH_PING_REQUEST
      },
      {
        type: types.FETCH_PING_FAILURE,
        error: true,
        meta: undefined,
        payload: new RequestError('No fallback response defined for GET to /ping', apiResponse)
      }
    ];

    const store = mockStore({}, expectedActions, done);

    return store.dispatch(getPingRequest()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
