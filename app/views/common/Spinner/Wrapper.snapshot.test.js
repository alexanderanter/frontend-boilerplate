import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Wrapper from './Wrapper';

describe('Wrapper', () => {
  let props;
  let wrapper;

  const Container = () => {
    if (!wrapper) {
      wrapper = shallow(<Wrapper {...props}>{props.children}</Wrapper>);
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
      expect(toJson(Container())).toMatchSnapshot();
    });
  });

  describe('with props', () => {
    it('Should match snapshot', () => {
      props = {
        fullSize: true
      };
      expect(toJson(Container())).toMatchSnapshot();
    });
  });
});
