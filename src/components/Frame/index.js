import styled from "styled-components";
import Screen from "../Screen";
import Controller from "../Controller";
import Footer from "../Footer";
import { BREAKPOINTS } from "../../constants";
const MainWrapper = styled.div`
  border-radius: 20px;
  background-color: ${(props) => props.theme.frameColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  box-shadow: inset 0 0 15px ${(props) => props.theme.frameShadowColor};
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 50px;
  }
`;

const Frame = ({ setNextTheme }) => {
  return (
    <MainWrapper>
      <Screen />

      <Controller setNextTheme={setNextTheme} />
      <Footer />
    </MainWrapper>
  );
};
export default Frame;
