import React from "react";
import styled from "styled-components";

export const Message = ({ text }) => {
  return <MessageEl>{text}</MessageEl>;
};

const MessageEl = styled.span`
  margin: 0 ${(props) => props.theme.space[0]};
`;
