import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { capture } from "../assets/images";
import { useDispatch } from "react-redux";
import { identifyObject } from "../redux/actions/objectIdentificationActions";

const Webcam = ({ handleClose }) => {
  const videoRef = useRef(null); // Reference to the video element
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const streamRef = useRef(null); // Ref to store the media stream
  const [isOpen, setIsOpen] = useState(false);

  // Function to capture an image from the video stream
  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg");
  };

  // Function to identify object
  const identifyCapturedObject = async () => {
    try {
      setIsOpen(true); // Open the sliding component after capturing the image
      const image = captureImage();
      const blob = await (await fetch(image)).blob(); // Convert base64 to Blob

      const formData = new FormData();
      formData.append("image", blob, "capture.jpg");

      const res = await dispatch(identifyObject(formData));
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

      streamRef.current = stream; // Store the stream in the ref
    }

    getMedia();

    // Cleanup function to stop the video stream
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          console.log(`Stopping track: ${track.kind}`);
          track.stop();
        });
      }
    };
  }, []);

  // Function to toggle the sliding component
  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full overlay flex flex-col items-center  h-full pt-8  overflow-y-auto">
      <div className={` mb-[470px]`}>
        <div className="w-[350px] h-[450px] rounded-[16px] bg-transparent backdrop-blur-lg relative">
          <video
            ref={videoRef}
            autoPlay
            className="rounded-[16px] shadow-lg h-full w-full"
          ></video>
          <div
            className="absolute mx-auto left-[50%] translate-x-[-30px] bottom-[20px] shadow-custom-shadow-lg cursor-pointer hover:scale-110 hover:bg-black transition-all duration-300 translate-x-[calc(50% + 30px)] w-[60px] h-[60px] bg-offBlack rounded-full flex items-center justify-center"
            onClick={identifyCapturedObject}
          >
            <img src={capture} className={`w-[20px] h-[20px] `} />
          </div>
          <canvas
            ref={canvasRef}
            // width={350}
            // height={450}
            // style={{ display: "none" }}
            className="mt-[30px] rounded-md mx-auto"
          ></canvas>
        </div>
      </div>

      <div
        className={`  fixed bottom-0 left-0 w-full bg-white shadow-lg transition-transform transform rounded-t-2xl ${
          isOpen ? "translate-y-0" : "translate-y-[calc(100%-4rem)]"
        }`}
        style={{ height: "50%" }}
      >
        <div className="p-4 pt-3">
          <div className="w-full">
            {isOpen ? (
              <Icon
                icon="eva:arrow-down-fill"
                color="#828282"
                className=" mx-auto w-[24px] h-[24px]"
                onClick={toggleSlide} // Toggle on click
              />
            ) : (
              <Icon
                icon="eva:arrow-up-fill"
                color="#828282"
                className=" mx-auto w-[24px] h-[24px]"
                onClick={toggleSlide} // Toggle on click
              />
            )}
          </div>

          <h2 className="text-md font-semibold m-0">No item to show</h2>
          <p>This is the sliding component content.</p>
        </div>
      </div>
    </div>
  );
};

export default Webcam;
