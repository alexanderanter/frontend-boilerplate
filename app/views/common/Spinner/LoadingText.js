import styled, { keyframes } from 'styled-components';
import colors from '../../../constants/colors';

const spin4 = keyframes`
  to { transform: translateY( -6.0em); }
`;

const LoadingText = styled.p`
  text-align: center;
  margin: 5px 0;
  color: ${colors.secondary};
  font-weight: bold;
  overflow: hidden;
  height: 1.3em;
  margin-top: -0.3em;
  line-height: 1.5em;
  vertical-align: text-bottom;
  &::after {
    display: inline-table;
    white-space: pre;
    text-align: left;
    content: '${'\\A.\\A..\\A...'}';
    animation: ${spin4} 2s steps(4) infinite;
  }
`;

export default LoadingText;
