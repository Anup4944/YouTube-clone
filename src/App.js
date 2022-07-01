import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container, Main, Wrapper } from "./app.style.js";
import Menu from "./components/Menu/Menu.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { darkTheme, lightTheme } from "./utils/Theme.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoPage from "./pages/VideoPage/VideoPage";
import SignIn from "./pages/SignIn/SignIn.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="signin" element={<SignIn />} />

                <Route path="video">
                  <Route path=":id" element={<VideoPage />} />
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
