import styled from 'styled-components';
import device from '../responsive/Device';

const BigLabel = styled.h2`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '30px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '37px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '43px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '52px'};
  } 
`;

export default BigLabel;