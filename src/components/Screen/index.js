import styled from "styled-components";
import { SIZES } from "../../constants";

const ScreenWrapper = styled.div`
  padding: 15px;
  margin-bottom: 30px;
  border: 5px solid ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledClipper = styled.div`
  position: absolute;
  top: -10px;
  padding: 0px 5px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.frameColor};
`;

const MainWrapper = styled.div`
  border: 1px solid black;

  background-color: ${(props) => props.theme.screenBg};

  display: flex;
  padding: 3px;
  width: 18rem;
  max-width: 65vw;
  aspect-ratio: 1/1.2;
`;

const LeftPanel = styled.div`
  width: ${SIZES.screenLeftWidth};
  border: 1px solid black;
`;

const RightPanel = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
const Screen = ({ theme }) => {
  console.log(theme);
  return (
    <ScreenWrapper>
      <MainWrapper>
        <LeftPanel></LeftPanel>
        <RightPanel></RightPanel>
      </MainWrapper>
      <StyledClipper>RETRO-JS</StyledClipper>
    </ScreenWrapper>
  );
};
export default Screen;
