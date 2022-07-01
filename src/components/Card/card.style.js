import styled from "styled-components";

export const Container = styled.div`
  width: ${(prop) => prop.type !== "sm" && "360px"};
  margin-bottom: ${(prop) => (prop.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(prop) => prop.type === "sm" && "flex"};
  gap: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: ${(prop) => (prop.type === "sm" ? "120px" : "202px")};
  flex: 1;
`;

export const Info = styled.div`
  display: flex;
  margin-top: ${(prop) => prop.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

export const ChannelImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50px;
  background-color: #999;
  display: ${(prop) => prop.type === "sm" && "none"}; ;
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

export const Infos = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;
