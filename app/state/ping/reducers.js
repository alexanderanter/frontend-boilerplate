import types from './types';

const INITIAL_STATE = {
  pingData: { message: '', error: null, loading: false }
};

const pingReducer = (state, action) => {
  /* eslint-disable-next-line no-param-reassign */
  state = state || /* istanbul ignore next */ INITIAL_STATE;
  let error;
  switch (action.type) {
    case types.FETCH_PING_REQUEST:
      return { ...state, pingData: { message: '', error: null, loading: true } };
    case types.FETCH_PING_SUCCESS:
      return {
        ...state,
        pingData: { message: action.payload.message, error: null, loading: false }
      };
    case types.FETCH_PING_FAILED:
      error = action.payload.error || action.payload.message;
      return { ...state, pingData: { message: '', error, loading: false } };
    default:
      return state;
  }
};

export default pingReducer;
