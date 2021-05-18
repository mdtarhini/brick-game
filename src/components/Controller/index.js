import styled from "styled-components";
import { FaArrowsAlt } from "react-icons/fa";

const ButtonSizeDict = { small: "25px", medium: "40px", large: "60px" };
const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  box-sizing: border-box;
  position: relative;
  appearance: none;
  cursor: pointer;
  transition: all 200ms ease;
  width: ${(props) => ButtonSizeDict[props.size]};
  height: ${(props) => ButtonSizeDict[props.size]};
  background-color: ${(props) => props.theme.btnColor};
  border-radius: 50%;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    display: ${(props) => (props.label ? "block" : "none")};
    position: absolute;
    bottom: -15px;
    font-size: 0.9em;
    color: ${(props) => props.theme.textColor};
    content: "${(props) => props.label}";
  }

  box-shadow: -1px -1px 3px ${(props) => props.theme.btnOuterShadowColor},
    2px 1px 3px ${(props) => props.theme.btnOuterShadowColor},
    inset 0.2rem 0.2rem 0.3rem ${(props) => props.theme.btnInnerShadowColor};

  &:hover {
    opacity: 85%;
  }

  &:focus {
    outline: none;
    box-shadow: inset 0.2rem 0.5rem 0.4rem
      ${(props) => props.theme.btnInnerShadowColor};
  }
`;

const UpperButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  width: 85%;
  justify-content: space-evenly;
  align-items: center;
`;
const LowerButtonGroup = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const DPad = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". up ."
    "left middle right"
    ". down .";
`;

const DPadButton = styled(Button)`
  grid-area: ${(props) => props.areaName};
`;
const DpadArrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  color: ${(props) => props.theme.textColor};
  grid-area: middle;
`;
const Controller = ({ setNextTheme }) => {
  return (
    <MainWrapper>
      <UpperButtonGroup>
        <Button size="small" label="on/off"></Button>
        <Button size="small" label="reset"></Button>
        <Button size="small" label="s/p"></Button>
        <Button size="small" label="sound"></Button>
        <Button size="small" label="theme" onClick={setNextTheme}></Button>
      </UpperButtonGroup>
      <LowerButtonGroup>
        <DPad>
          <DPadButton areaName="up" size="medium" />

          <DPadButton areaName="left" size="medium" />
          <DPadButton areaName="right" size="medium" />
          <DPadButton areaName="down" size="medium" />
          <DpadArrows>
            <FaArrowsAlt />
          </DpadArrows>
        </DPad>
        <Button size="large"></Button>
      </LowerButtonGroup>
    </MainWrapper>
  );
};
export default Controller;
