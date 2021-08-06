import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

import { theme } from "../../theme";

import { Button } from "../Button";
import { randomHexcode } from "../../utils";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useKeyPress } from "../../hooks/useKeyPress";
import { handleOnClickCopyColours } from "../../hooks/useCopyToClipboard";
import { Message } from "../Message";
import { AppWrapper, ButtonWrapper, Title, Wrapper } from "./Styles";
import { ColourPanel } from "../ColourPanel";
import { Loader } from "../Loader";

const COLOURS_NUM = 5;

function App() {
  const [loading, setLoading] = useState(false);
  const [colours, setColours] = useState([]);
  const { width } = useWindowSize();

  useKeyPress("c", colours);

  const onDragEnd = ({ destination, source }) => {
    if (!isPositionChanged(destination, source)) {
      return;
    }
    const coloursArrayCopy = Array.from(colours);
    const [removed] = coloursArrayCopy.splice(source.index, 1);
    coloursArrayCopy.splice(destination.index, 0, removed);
    setColours(coloursArrayCopy);
  };

  const isPositionChanged = (destination, source) => {
    // Check that destination is defined
    // As dragging and dropping a card outside of the DragDropContext
    // Leads to destination being undefined
    if (destination && destination.index !== source.index) {
      return true;
    }
    return false;
  };

  const randomColourGeneratorHandler = () => {
    const hexcodesArray = [...Array(COLOURS_NUM)].map((x) => {
      return randomHexcode();
    });
    setColours(hexcodesArray);
    localStorage.setItem("colours", hexcodesArray);
  };

  const randomColourGenerator = () => {
    const hexcodesArray = [...Array(COLOURS_NUM)].map((x) => {
      return randomHexcode();
    });
    return hexcodesArray;
  };

  const switchColourHandler = (index) => {
    const coloursClone = [...colours];
    coloursClone[index] = randomHexcode();
    localStorage.setItem("colours", coloursClone);
    setColours(coloursClone);
  };

  useEffect(() => {
    setLoading(true);
    // We need a check to see if any colours are stored in local storage.
    const storedColours = localStorage.getItem("colours");
    if (storedColours) {
      let coloursArray = storedColours.split(",");
      setColours(coloursArray);
    } else {
      const hexcodeList = randomColourGenerator();
      localStorage.setItem("colours", hexcodeList);
      setColours(hexcodeList);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Title>Colour Palette Generator</Title>
        <Wrapper>
          {colours && (
            <DragDropContext onDragEnd={onDragEnd}>
              <ColourPanel
                colourList={colours}
                width={width}
                switchColour={(index) => switchColourHandler(index)}
              />
            </DragDropContext>
          )}
        </Wrapper>
        <ButtonWrapper>
          <Button
            handleClick={() => randomColourGeneratorHandler()}
            text="Generate Palette"
            colour="white"
          />
          {width < 900 ? (
            <Button
              text="Copy Palette"
              colour="white"
              handleClick={() => handleOnClickCopyColours(colours)}
            />
          ) : (
            <Message text='Press "C" to copy palette' />
          )}
        </ButtonWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
}
export default App;
