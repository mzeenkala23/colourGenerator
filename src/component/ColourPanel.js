import React from "react";
import { Droppable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Card } from "./Card";

export const ColourPanel = ({ colourList, width, switchColour }) => {
  return (
    <Droppable
      droppableId="droppable-1"
      direction={width >= 900 ? "horizontal" : "vertical"}
    >
      {(provided) => (
        <CardListWrapper ref={provided.innerRef} {...provided.droppableProps}>
          {colourList.map((colour, index) => (
            <Card
              key={colour}
              id={index}
              colour={colour}
              switchColour={switchColour}
            />
          ))}
          {provided.placeholder}
        </CardListWrapper>
      )}
    </Droppable>
  );
};

export const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: ${(props) => props.theme.space[2]};

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

ColourPanel.propTypes = {
  colourList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  width: PropTypes.number.isRequired,
  switchColour: PropTypes.func.isRequired,
};
