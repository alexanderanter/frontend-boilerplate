import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import PageTitle from './PageTitle';

const defaultProps = {
  title: 'PageTitle'
};

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

const BasePage = ({ title, children }) => (
  <Wrapper>
    <PageTitle>{title}</PageTitle>
    {children}
  </Wrapper>
);

BasePage.defaultProps = defaultProps;
BasePage.propTypes = propTypes;

export default BasePage;
