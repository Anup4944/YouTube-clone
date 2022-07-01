import React from "react";
import "./navbar.style.js";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import {
  Container,
  Wrapper,
  SearchContainer,
  Button,
  Input,
} from "./navbar.style.js";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </SearchContainer>

        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
