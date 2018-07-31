import { apiMiddleware, ApiError } from 'redux-api-middleware';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { getPingRequest } from './actions';
import types from './types';

const mockStore = configureMockStore([thunkMiddleware, apiMiddleware]);

// describe unit
describe('getPingRequest() async action creator', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('dispatches FETCH_PING_FAILURE action on failed request', () => {
    const apiResponse = { message: 'Unexpected token <' };

    fetch.mockResponseOnce(JSON.stringify(apiResponse), {
      status: 500
    });

    const expectedActions = [
      {
        type: types.FETCH_PING_REQUEST
      },
      {
        type: types.FETCH_PING_FAILURE,
        error: true,
        meta: undefined,
        payload: new ApiError(500, 'Internal Server Error', apiResponse)
      }
    ];

    const store = mockStore({});

    return store.dispatch(getPingRequest()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });

  it('dispatches FETCH_PING_SUCCESS action on successful request', () => {
    const apiResponse = { message: 'Pong!' };

    fetch.mockResponseOnce(JSON.stringify(apiResponse), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

    const expectedActions = [
      {
        type: types.FETCH_PING_REQUEST
      },
      {
        type: types.FETCH_PING_SUCCESS,
        meta: undefined,
        payload: apiResponse
      }
    ];

    const store = mockStore({});

    return store.dispatch(getPingRequest()).then(() => {
      const actions = store.getActions();
      expect(actions).toEqual(expectedActions);
    });
  });
});
