import { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Capture from "../components/Capture";
import Overlay from "../components/Overlay";
import PopupGallery from "../components/PopupGallery";
import Webcam from "../components/Webcam";

const Home = ({ images }) => {
  // State for user details modal visibility
  const [isOpen, setIsOpen] = useState(false);

  //   Function to close user modal
  const handleClose = () => {
    setIsOpen(false);
    // getTracks().forEach((track) => track.stop());
  };
  //   End of function to close user modal

  // Functioon to handle webcam pop up
  const handleClick = () => {
    setIsOpen(true);
  };
  // End of functioon to handle webcam pop up
  console.log(isOpen);
  return (
    <div className={`flex flex-col items-center w-full`}>
      <Overlay isOpen={isOpen} onClose={handleClose}>
        <Webcam handleClose={handleClose} />
      </Overlay>
      <Navbar display={"logo"} percentScrolled={0.8} />
      <Header images={images} />
      <Grid images={images} />
      {isOpen ? null : <Capture handleClick={handleClick} />}
    </div>
  );
};

export default Home;
