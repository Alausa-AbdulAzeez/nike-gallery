import React, { useContext, useEffect, useRef } from "react";
import PopupImage from "./PopupImage";
import MediumButton from "./MediumButton";
import { Icon } from "@iconify/react";
import { ImageContext } from "./Grid";
import { capture } from "../assets/images";

const Webcam = ({ handleClose }) => {
  const videoRef = useRef(null); // Reference to the video element
  // State to store bounding box coordinates

  // Effect to get video stream from the user's camera
  useEffect(() => {
    async function getMedia() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream; // Set the video source to the stream
    }

    getMedia();
  }, []);

  return (
    <div className="w-full overlay flex flex-col items-center  h-full pt-8 overflow-y-auto">
      <div className={` mb-[70px]`}>
        <div className="w-[350px] h-[450px] rounded-[16px] bg-transparent backdrop-blur-lg ">
          <video
            ref={videoRef}
            autoPlay
            className="rounded shadow-lg h-full w-full"
          ></video>
        </div>
      </div>
      <div className="fixed bottom-8 shadow-custom-shadow-lg cursor-pointer hover:scale-110 hover:bg-black transition-all duration-300 translate-x-[calc(50% + 30px)] w-[60px] h-[60px] bg-offBlack rounded-full flex items-center justify-center">
        <img src={capture} className={`w-[20px] h-[20px] `} />
      </div>
    </div>
  );
};

export default Webcam;
