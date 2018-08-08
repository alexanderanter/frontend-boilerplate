import styled from 'styled-components';

/* eslint-disable react/destructuring-assignment */
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 300px;
  min-height: 300px;
  width: 100%;
  height: ${props => (props.fullSize ? '100vh' : 'auto')};
`;
/* eslint-enable react/destructuring-assignment */

export default Wrapper;
