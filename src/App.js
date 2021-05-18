import { ThemeProvider, createGlobalStyle } from "styled-components";
import Frame from "./components/Frame";
import { THEMES } from "./constants";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    background: radial-gradient(
    circle,
    ${(props) => props.theme.mainBg1} 0%,
    ${(props) => props.theme.mainBg2} 100%
  );
  }
  
`;

const App = () => {
  const [theme, setTheme] = useState("blue");
  const setNextTheme = () => {
    const availableThemes = Object.keys(THEMES);
    const currentThemeIndex = availableThemes.indexOf(theme);
    setTheme(
      availableThemes[
        currentThemeIndex === availableThemes.length - 1
          ? 0
          : currentThemeIndex + 1
      ]
    );
  };

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <>
        <GlobalStyle />
        <Frame setNextTheme={setNextTheme} />
      </>
    </ThemeProvider>
  );
};

export default App;
