import React, { useContext } from "react";
import { ImageContext } from "./Grid";

const MediumButton = ({ text, style }) => {
  const providerContext = useContext(ImageContext);
  const { handleClose, handleNav } = providerContext;

  let handleClick;

  switch (text) {
    case "Close":
      handleClick = handleClose;
      break;
    case "More details":
      handleClick = handleNav;
      break;
    default:
      break;
  }

  return (
    <button
      className={`h-9 w-[118px] rounded-[4px] body-medium ${style} transition-all duration-300 hover:opacity-50`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default MediumButton;
