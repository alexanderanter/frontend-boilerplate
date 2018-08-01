import React from 'react';
/* eslint-disable */
const rrd = require('react-router-dom');
// Just render plain div with its children
rrd.BrowserRouter = ({ children }) => <div>{children}</div>;
module.exports = rrd;
