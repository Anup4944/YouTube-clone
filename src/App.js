import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container, Main, Wrapper } from "./app.style.js";
import Menu from "./components/Menu/Menu.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { darkTheme, lightTheme } from "./utils/Theme.js";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu setDarkMode={setDarkMode} darkMode={darkMode} />

        <Main>
          <Navbar />
          <Wrapper>
            <h1>Test</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
