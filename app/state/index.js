import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import { apiMiddleware } from 'redux-api-middleware';
import pingReducer from './ping';

const history = createHistory();

const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({
  form,
  ping: pingReducer
});

/**
 * Takes initial state and returns redux store configured
 * @param  {Object} initialState Inital state
 * @return {Object}              Redux store
 */
export default function configureStore(initialState) {
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(
      applyMiddleware(apiMiddleware),
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history))
    )
  );
}
