import React, { useEffect } from "react";

const Overlay = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    // Disable scrolling when the overlay is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to reset the overflow style
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClick = (e) => {
    // Check if the click target is the overlay background
    if (e.target.classList.contains("overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="fixed z-[99] top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-xl overflow-hidden"
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-black opacity-25 overlay z-[100]"></div>
      <div className="relative w-full z-[101] h-full">{children}</div>
    </div>
  );
};

export default Overlay;
