import React from 'react';
import { shallow } from 'enzyme';
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
    it('should have a height', () => {
      expect(Wrapper()).toHaveStyleRule('height', 'auto');
    });

    it('should wrap', () => {
      expect(Wrapper()).toHaveStyleRule('flex-wrap', 'no-wrap');
    });

    it('should be column direction', () => {
      expect(Wrapper()).toHaveStyleRule('flex-direction', 'row');
    });

    it('should align center', () => {
      expect(Wrapper()).toHaveStyleRule('align-items', 'flex-start');
    });

    it('should justify center', () => {
      expect(Wrapper()).toHaveStyleRule('justify-content', 'flex-start');
    });
  });

  describe('with props', () => {
    props = {
      height: '100px',
      wrap: true,
      direction: 'column',
      align: 'center',
      justify: 'center'
    };

    const tree = Wrapper();

    it('should have a height', () => {
      expect(tree).toHaveStyleRule('height', '100px');
    });

    it('should wrap', () => {
      expect(tree).toHaveStyleRule('flex-wrap', 'wrap');
    });

    it('should be column direction', () => {
      expect(tree).toHaveStyleRule('flex-direction', 'column');
    });

    it('should align center', () => {
      expect(tree).toHaveStyleRule('align-items', 'center');
    });

    it('should justify center', () => {
      expect(tree).toHaveStyleRule('justify-content', 'center');
    });
  });
});
