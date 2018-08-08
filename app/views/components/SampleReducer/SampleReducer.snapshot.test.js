import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Button from '@material-ui/core/Button';
import SampleReducer from './index';

describe('SampleReducer', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<SampleReducer {...props}>{props.children}</SampleReducer>);
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

  describe('User clicks the ping button', () => {
    wrapper = Wrapper();
    const btn = wrapper.find(Button);
    btn.simulate('click');
  });

  describe('Data is loading', () => {
    it('Should show Spinner', () => {
      props = {
        loading: true
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
