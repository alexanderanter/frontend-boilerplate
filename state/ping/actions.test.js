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
    const apiResponse = {
      message: 'Unexpected token <'
    };

    fetch.mockResponseOnce(apiResponse, { status: 500 });

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
});
