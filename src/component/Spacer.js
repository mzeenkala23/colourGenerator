import styled from "styled-components";
import { useTheme } from "styled-components";
import React from "react";

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <Spacing variant={variant}>{children}</Spacing>;
};

const Spacing = styled.div`
  ${({ variant }) => variant};
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
