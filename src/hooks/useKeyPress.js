import { useEffect } from "react";
import { useCopyToClipBoard } from "./useCopyToClipboard";

export const useKeyPress = (key, dep) => {
  const { copyColours } = useCopyToClipBoard();
  useEffect(() => {
    const keyPress = (e) => {
      if (e.key === key) {
        if (dep) {
          copyColours(dep);
        }
      }
    };

    window.addEventListener("keypress", keyPress);

    return () => window.removeEventListener("keypress", keyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep, copyColours]);
};
