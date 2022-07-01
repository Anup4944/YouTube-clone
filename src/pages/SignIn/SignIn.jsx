import React from "react";
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Input,
  Button,
  More,
  Links,
  Link,
} from "./signIn.style.js";

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to YouTube</SubTitle>
        <Input placeholder="Enter username" />
        <Input type="password" placeholder="Enter password" />
        <Button>Sign In</Button>
        <Title>or</Title>
        <Input placeholder="Enter username" />
        <Input placeholder="Enter email" />
        <Input type="password" placeholder="Enter password" />
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
