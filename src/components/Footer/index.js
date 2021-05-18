import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";
const StyledWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  color: ${(props) => props.theme.textColor};
  align-items: center;
  flex-direction: column;
  font-size: 2.4em;
  font-weight: bold;
  transform: rotate(-30deg);
  @media screen and (max-width: ${BREAKPOINTS.md}) {
    display: none;
  }
`;

const StyledShifted = styled.span`
  margin-top: 5px;
  margin-left: 80px;
`;

const Footer = () => {
  return (
    <StyledWrapper>
      <span>BRICK</span>
      <StyledShifted>GAME</StyledShifted>
    </StyledWrapper>
  );
};
export default Footer;
