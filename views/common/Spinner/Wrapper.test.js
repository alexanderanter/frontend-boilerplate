import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Wrapper from './index';

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
    it('should have auto height', () => {
      expect(Container()).toHaveStyleRule('height', 'auto');
    });
  });

  describe('with props', () => {
    props = {
      fullSize: true
    };
    const tree = Container();

    it('should have a height', () => {
      expect(tree).toHaveStyleRule('height', '100vh');
    });
  });
});
