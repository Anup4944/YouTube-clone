import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 202px;
`;

export const Info = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 12px;
`;

export const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50px;
  background-color: #999;
`;

export const Texts = styled.div``;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

export const Infos = styled.div``;
