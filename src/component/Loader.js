import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

export const Loader = () => (
  <StyledLoader>
    <Spinner size={60} />{" "}
  </StyledLoader>
);

const StyledLoader = styled.div`
  width: 100%;
  padding: 200px 0;
  text-align: center;
`;
