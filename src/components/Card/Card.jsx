import React from "react";
import {
  Container,
  Image,
  Info,
  ChannelImg,
  Texts,
  Title,
  ChannelName,
  Infos,
} from "./card.style.js";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image
          src="https://i.ytimg.com/vi/8YbZuaBP9B8/maxresdefault.jpg"
          alt="img"
        />
        <Info>
          <ChannelImg src="https://i.pinimg.com/originals/70/3e/02/703e02b53cb97fa45cef8b156e4b0e4a.png" />
          <Texts>
            <Title>New Video</Title>
            <ChannelName>Blogger</ChannelName>
            <Infos>600 views 1 day ago</Infos>
          </Texts>
        </Info>
      </Container>
    </Link>
  );
};

export default Card;
