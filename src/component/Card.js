import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";

export const Card = ({ colour, switchColour, id }) => {
  const handleClick = () => {
    switchColour(id);
  };
  return (
    <Draggable index={id} draggableId={colour}>
      {(provided) => (
        <CardWrapper
          onClick={handleClick}
          ref={provided.innerRef}
          data-testid="list-issue"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <GeneratedColour colour={colour} />
          <Text>{colour}</Text>
        </CardWrapper>
      )}
    </Draggable>
  );
};

const CardWrapper = styled.div`
  width: 70%;
  height: 150px;
  padding: ${(props) => props.theme.space[1]};
  border-radius: ${(props) => props.theme.space[3]};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: ${(props) => props.theme.colors.text.light};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 900px) {
    height: 350px;
    width: 90%;
  }
`;

const Text = styled.span`
  margin-top: ${(props) => props.theme.space[0]};
`;

const GeneratedColour = styled.div`
  background-color: ${(props) => props.colour};
  height: 80%;
  width: 100%;
  border-radius: ${(props) => props.theme.space[3]};

  @media (min-width: 600px) {
    height: 95%;
  }
`;

Card.propTypes = {
  colour: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  switchColour: PropTypes.func.isRequired,
};
