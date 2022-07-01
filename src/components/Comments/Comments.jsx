import React from "react";
import "./comments.style.js";
import { Avatar, Container, Input, NewComment } from "./comments.style.js";
import Comment from "../Comment/Comment";

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar
          src="https://i.ytimg.com/vi/8YbZuaBP9B8/maxresdefault.jpg"
          alt="avatar"
        />
        <Input placeholder="Add a comment" />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
