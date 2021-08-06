import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Button = ({ handleClick, text, colour }) => {
  return (
    <ButtonElement colour={colour} onClick={handleClick}>
      {text}
    </ButtonElement>
  );
};

const ButtonElement = styled.button`
  color: ${({ colour }) => colour};
  background-color: #7e6ccb;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[2]};
  margin: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[0]};
  border-radius: ${(props) => props.theme.space[2]};
  border: none;
  outline: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
