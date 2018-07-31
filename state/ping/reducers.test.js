import pingReducer from './reducers';
import types from './types';

describe('ping reducer', () => {
  it('should handle FETCH_PING_REQUEST', () => {
    expect(
      pingReducer([], {
        type: types.FETCH_PING_REQUEST
      })
    ).toEqual({ pingData: { error: null, loading: true, message: '' } });
  });
  it('should handle FETCH_PING_SUCCESS', () => {
    expect(
      pingReducer([], {
        type: types.FETCH_PING_SUCCESS,
        payload: { message: 'Pong' }
      })
    ).toEqual({ pingData: { error: null, loading: false, message: 'Pong' } });
  });
  it('should handle FETCH_PING_FAILURE', () => {
    expect(
      pingReducer([], {
        type: types.FETCH_PING_FAILED,
        payload: { error: 'error' }
      })
    ).toEqual({ pingData: { error: 'error', loading: false, message: '' } });
  });
  it('should handle none existing state', () => {
    expect(
      pingReducer([], {
        type: 'DOES_NOT_EXIST'
      })
    ).toEqual([]);
  });
});
