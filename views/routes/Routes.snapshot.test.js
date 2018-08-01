import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Routes from './index';

describe('Routes', () => {
  let props;
  let wrapper;
  let initialEntries;
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
      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={initialEntries}>
            <Routes {...props}>{props.children}</Routes>
          </MemoryRouter>
        </Provider>
      );
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {};
    initialEntries = [];
    wrapper = undefined;
  });

  describe('on / route', () => {
    it('should match snapshot for HomePage', () => {
      initialEntries = ['/'];
      console.error = jest.fn();
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
