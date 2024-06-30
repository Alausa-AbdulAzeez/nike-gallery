import React, { useContext } from "react";
import PopupImage from "./PopupImage";
import MediumButton from "./MediumButton";
import { Icon } from "@iconify/react";
import { ImageContext } from "./Grid";

const PopupGallery = ({ handleClose }) => {
  const { selectedIndex, setSelectedIndex, images, setSelectedImage } =
    useContext(ImageContext);

  /**
   * Determines whether the "Next" button should be displayed.
   * The button is displayed if the current selectedIndex is less than the last index in the images array.
   */
  const showNextBtn = selectedIndex < images.length - 1;

  /**
   * Determines whether the "Previous" button should be displayed.
   * The button is displayed if the current selectedIndex is greater than 0.
   */
  const showPrevBtn = selectedIndex > 0;

  /**
   * Handles the logic for navigating to the next image in the gallery.
   * Increments the selectedIndex and updates the selectedImage state.
   */
  const handleNext = () => {
    if (showNextBtn) {
      const newIndex = selectedIndex + 1;
      setSelectedImage(images[newIndex]);
      setSelectedIndex(newIndex);
    }
  };

  /**
   * Handles the logic for navigating to the previous image in the gallery.
   * Decrements the selectedIndex and updates the selectedImage state.
   */
  const handlePrev = () => {
    if (showPrevBtn) {
      const newIndex = selectedIndex - 1;
      setSelectedImage(images[newIndex]);
      setSelectedIndex(newIndex);
    }
  };

  return (
    <div className="w-full overlay flex flex-col items-center  h-full pt-8 overflow-y-auto">
      {[{}, {}, {}].map((element, index) => {
        return (
          <div className={`${index === 2 && "mb-[70px]"}`} key={index}>
            <PopupImage />
          </div>
        );
      })}

      <div className="flex gap-6 fixed bottom-12">
        <MediumButton
          text={"Close"}
          style={"text-black bg-white"}
          handleClick={handleClose}
        />
        <MediumButton text={"More details"} style={"text-white bg-black"} />
      </div>
      <div className="flex gap-6 fixed top-12">
        {showPrevBtn && (
          <div
            onClick={handlePrev}
            className="w-[28px] transition-all duration-300 hover:opacity-80 h-[28px] flex items-center justify-center rounded-full cursor-pointer bg-white"
          >
            <Icon
              icon="solar:skip-previous-bold"
              className={`w-[16px] h-[16px] `}
            />
          </div>
        )}

        {showNextBtn && (
          <div
            onClick={handleNext}
            className="w-[28px] transition-all duration-300 hover:opacity-80 h-[28px] flex items-center justify-center rounded-full cursor-pointer bg-white"
          >
            <Icon
              icon="solar:skip-next-bold"
              className={`w-[16px] h-[16px] `}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupGallery;
