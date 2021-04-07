import styled from 'styled-components';
import device from '../responsive/Device';

const MediumLabel = styled.h3`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '20px'};
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
    font-size: ${({ fontSize }) => fontSize || '23px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '26px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '29px'};
  }
`;

export default MediumLabel;