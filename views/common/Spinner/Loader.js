import styled, { keyframes } from 'styled-components';
import colors from '../../../constants/colors';

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 8px solid ${colors.lightgray};
  border-radius: 50%;
  border-top: 8px solid ${colors.secondary};
  border-bottom: 8px solid ${colors.secondary};
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto 5px;
`;

export default Loader;
