import React from "react";
import { Container, Main, Wrapper } from "./app.style.js";
import Menu from "./components/Menu/Menu.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  return (
    <Container>
      <Menu />

      <Main>
        <Navbar />
        <Wrapper>
          <h1>Test</h1>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default App;
