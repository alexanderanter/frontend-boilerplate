import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

const BasePage = ({ children }) => <div>{children}</div>;

BasePage.propTypes = propTypes;

export default BasePage;
