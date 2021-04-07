import styled from 'styled-components';
import device from '../responsive/Device';

const Text = styled.span`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-size: ${({ fontSize }) => fontSize || '12px'};
  text-align: ${({ align }) => align || 'left'};
  ${({ firstToUpperCase }) =>
        firstToUpperCase &&
        `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '15px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '17px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '19px'};
  }
`;

export default Text;