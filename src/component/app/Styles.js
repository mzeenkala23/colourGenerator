import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  text-align: center;
  margin: ${(props) => props.theme.space[1]} 0px;
  font-size: ${(props) => props.theme.space[3]};
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1280px;
  @media (min-width: 900px) {
    margin-top: 100px;
  }
`;
