import { useContext } from "react";
import { ImageContext } from "./Grid";

const PopupImage = () => {
  const providerContext = useContext(ImageContext);
  const { selectedImage: image } = providerContext;

  return (
    <div className="flex flex-col gap-7 items-center animate-bounce-once">
      <div className=" rounded-2xl">
        <img
          src={image}
          alt={`Image`}
          className="w-auto max-w-[350px] md:max-w-[640px] h-auto max-h-[420px] rounded-2xl"
        />
      </div>
      <div className="h-[1px] w-[240px] bg-white mb-7"></div>
    </div>
  );
};

export default PopupImage;
