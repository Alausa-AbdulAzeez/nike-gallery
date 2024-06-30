import { capture } from "../assets/images";

const Capture = ({ handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="fixed bottom-[80px] shadow-custom-shadow-lg cursor-pointer hover:scale-110 hover:bg-black transition-all duration-300 right-[80px] w-[60px] h-[60px] bg-offBlack rounded-full flex items-center justify-center"
    >
      <img src={capture} className={`w-[20px] h-[20px] `} />
    </div>
  );
};

export default Capture;
