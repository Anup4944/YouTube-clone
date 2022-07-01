import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.soft};
`;

export const Wrapper = styled.div`
  padding: 22px 90px;
`;
