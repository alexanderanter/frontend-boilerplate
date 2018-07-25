import types from './types';

const INITIAL_STATE = {
  pingData: { message: '', error: null, loading: false }
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case types.FETCH_PING_REQUEST:
      return { ...state, pingData: { message: '', error: null, loading: true } };
    case types.FETCH_PING_SUCCESS:
      console.log(action);
      return {
        ...state,
        pingData: { message: action.payload.message, error: null, loading: false }
      };
    case types.FETCH_PING_FAILED:
      error = action.payload.error || { message: action.payload.message };
      return { ...state, pingData: { message: '', error, loading: false } };
    default:
      return state;
  }
};

export default cardsReducer;
