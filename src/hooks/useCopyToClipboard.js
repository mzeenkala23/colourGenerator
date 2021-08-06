import { useCallback } from "react";

export const useCopyToClipBoard = () => {
  const copyColours = useCallback(handleOnClickCopyColours, []);
  return { copyColours };
};

export const handleOnClickCopyColours = async (copyData) => {
  if (!navigator.clipboard) {
    alert("Your Browser doesn't support copy to clipboard");
    return;
  }
  try {
    await navigator.clipboard.writeText(copyData);
    alert("successfully saved to the clipboard");
  } catch (error) {
    alert(error, "Failed to save to the clipboard");
  }
};
