import React from "react";
import {
  Container,
  Content,
  Recommendation,
  VideoWrapper,
  Title,
  Details,
  Info,
  Buttons,
  Button,
  Hr,
  Channel,
  ChannelInfo,
  ChannelBtn,
  Image,
  ChannelName,
  ChannelDetails,
  ChannelCount,
  ChannelDesc,
} from "./video.page.style";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";

const VideoPage = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/watch?v=yIaXoop8gl4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 views • Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              123{" "}
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="" alt="avatar" />
            <ChannelDetails>
              <ChannelName>Lama Dev</ChannelName>

              <ChannelCount>220k subscribers</ChannelCount>
              <ChannelDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                id fuga maxime. Temporibus omnis adipisci, cumque corporis
                fugiat esse itaque recusandae numquam qui accusantium
                dignissimos, quo neque maiores quam vero!
              </ChannelDesc>
            </ChannelDetails>
          </ChannelInfo>

          <ChannelBtn>Subscribe</ChannelBtn>
        </Channel>
      </Content>
      <Recommendation>recommendation</Recommendation>
    </Container>
  );
};

export default VideoPage;
