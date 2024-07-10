import { useEffect, useState } from "react";
import { capture } from "../assets/images";

const Capture = ({ handleClick }) => {
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  //  const rightPosition = windowSize > 1280 ? windowSize / 2 : 80;
  const rightPosition = windowSize < 1280 ? 80 : windowSize / 2 - 570;

  console.log(windowSize);
  console.log(rightPosition);

  return (
    <div
      onClick={handleClick}
      style={{ right: rightPosition }}
      className={`fixed bottom-[30px] max-md:!right-[50px] md:bottom-[80px] shadow-custom-shadow-lg cursor-pointer hover:scale-110 hover:bg-black transition-all duration-300  w-[60px] h-[60px] bg-offBlack rounded-full flex items-center justify-center`}
    >
      <img src={capture} className={`w-[20px] h-[20px] `} />
    </div>
  );
};

export default Capture;
