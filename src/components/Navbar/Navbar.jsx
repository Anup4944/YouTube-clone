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
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </SearchContainer>

        <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
