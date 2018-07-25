import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from '../BasePage';
import FlexBox from '../../common/FlexBox';
import SampleReducerContainer from '../../containers/SampleReducerContainer';

const HomePage = () => (
  <BasePage title="welcome">
    <FlexBox align="center" justify="space-around">
      <p>Sample routes:</p>
      <Link to="/page-one">Page 1</Link>
      <Link to="/page-two">Page 2</Link>
      <Link to="/page-three">Page 3</Link>
    </FlexBox>
    <hr />
    <SampleReducerContainer />
  </BasePage>
);

export default HomePage;
