import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SampleReducerContainer from './index';

describe('SampleReducerContainer', () => {
  let props;
  let wrapper;
  const initialState = {
    ping: {
      pingData: {
        message: 'Pong!',
        error: 'error',
        loading: true
      }
    }
  };
  const mockStore = configureMockStore();
  const store = mockStore(initialState);

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(
        <Provider store={store}>
          <SampleReducerContainer {...props}>{props.children}</SampleReducerContainer>
        </Provider>
      );
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    wrapper = undefined;
  });

  describe('without props', () => {
    it('Should match snapshot', () => {
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
