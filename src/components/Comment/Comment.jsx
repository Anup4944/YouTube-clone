import React from "react";
import {
  Container,
  Avatar,
  Details,
  Name,
  Date,
  Text,
} from "./comment.style.js";

const Comment = () => {
  return (
    <Container>
      <Avatar
        src="https://i.ytimg.com/vi/8YbZuaBP9B8/maxresdefault.jpg"
        alt="avatar"
      />

      <Details>
        <Name>
          John Low <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
          recusandae vitae esse totam pariatur libero architecto cumque culpa
          cum. Rem corrupti ad amet architecto labore laborum, quae veniam eos
          fugit?
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
