import React, { useContext, useEffect, useRef, useState } from "react";
import PopupImage from "./PopupImage";
import MediumButton from "./MediumButton";
import { Icon } from "@iconify/react";
import { ImageContext } from "./Grid";
import { capture } from "../assets/images";
import { useDispatch } from "react-redux";
import { identifyObject } from "../redux/actions/objectIdentificationActions";

const Webcam = ({ handleClose }) => {
  const canvasRef = useRef(null); // Reference to the canvas element

  const videoRef = useRef(null); // Reference to the video element
  const dispatch = useDispatch();

  const [capturedImage, setCapturedImage] = useState(null);

  // Function to capture an image from the webcam
  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg");
  };

  // Function to identify object
  const identifyCapturedObject = async () => {
    console.log("here");
    const image = captureImage();
    setCapturedImage(image);
    try {
      const res = await dispatch(identifyObject(image));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  // End of function to identify object

  // Effect to get video stream from the user's camera
  useEffect(() => {
    async function getMedia() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" }, // Use back camera by default
        },
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
      <canvas ref={canvasRef}></canvas>
      {/* <canvas ref={canvasRef} style={{ display: "none" }}></canvas> */}
      <div
        className="fixed bottom-8 shadow-custom-shadow-lg cursor-pointer hover:scale-110 hover:bg-black transition-all duration-300 translate-x-[calc(50% + 30px)] w-[60px] h-[60px] bg-offBlack rounded-full flex items-center justify-center"
        onClick={identifyCapturedObject}
      >
        <img src={capture} className={`w-[20px] h-[20px] `} />
      </div>
    </div>
  );
};

export default Webcam;
