import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import FlexBox from './index';

describe('FlexBox', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<FlexBox {...props}>{props.children}</FlexBox>);
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

  describe('with props', () => {
    it('Should match snapshot', () => {
      props = {
        height: '100px',
        wrap: true,
        direction: 'column',
        align: 'center',
        justify: 'center'
      };
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
