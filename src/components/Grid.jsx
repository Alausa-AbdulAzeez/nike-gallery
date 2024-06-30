import Masonry from "react-masonry-css";
import Image from "./Image";
import Overlay from "./Overlay";
import { createContext, useContext, useEffect, useState } from "react";
import PopupGallery from "./PopupGallery";
import { useNavigate } from "react-router-dom";

// Create ImageContext at the top level
const ImageContext = createContext();

const Grid = ({ images, setItemIndex }) => {
  // Navigation
  const nav = useNavigate();

  // State for screen scroll position
  const [isAtBottom, setIsAtBottom] = useState(false);

  // State for user details modal visibility
  const [isOpen, setIsOpen] = useState(false);

  //   State for the currently selected image
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const breakpointColumnsObj = {
    default: 3, // Default number of columns
    // 1100: 2, // Number of columns for screens larger than 1100px
    700: 2, // Number of columns for screens larger than 700px
  };

  //   Function to close user modal
  const handleClose = () => {
    setIsOpen(false);
  };
  //   End of function to close user modal

  //   Function to handle navigation to single Image page
  const handleNav = () => {
    setIsOpen(false);
    nav(`/item?id=${selectedIndex}`);
    setItemIndex(Number(new URLSearchParams(location.search).get("id")));
  };
  //   End of unction to handle navigation to single Image page

  //   Function to handle image click
  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setIsOpen(true);
  };
  //   End of function to handle image click

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const providerValues = {
    selectedImage,
    selectedIndex,
    setSelectedIndex,
    setSelectedImage,
    images,
    handleClose,
    handleNav,
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClose={handleClose}>
        <ImageContext.Provider value={providerValues}>
          <PopupGallery handleClose={handleClose} />
        </ImageContext.Provider>
      </Overlay>
      <div
        className={`app__container w-full p-2 ${
          isAtBottom && "animate-bounce-once"
        }`}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images?.map((image, index) => {
            return (
              <Image
                image={image}
                index={index}
                key={index}
                handleClick={() => handleImageClick(image, index)}
              />
            );
          })}
        </Masonry>
      </div>
    </>
  );
};

export default Grid;
export { ImageContext }; // Export ImageContext for usage in other components
