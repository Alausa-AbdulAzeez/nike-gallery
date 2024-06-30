import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Navbar = ({ display, percentScrolled, handleBackClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset >= window.innerHeight * percentScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-colors duration-300 h-[70px] z-10 ${
        scrolled ? "bg-white" : "bg-transparent "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center h-full">
        {display === "logo" && (
          <div
            className={`text-2xl font-bold ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <span
              className={`${
                scrolled ? "text-white bg-black" : "text-black bg-white"
              } px-2 py-1 rounded mr-1`}
            >
              M
            </span>
            axim
          </div>
        )}

        {display === "back" && (
          <div
            className="h-full flex items-center gap-2 bg-inherit cursor-pointer"
            onClick={handleBackClick}
          >
            <Icon
              icon="system-uicons:wrap-back"
              className={`w-[24px] h-[24px] `}
            />
            <div className="body-medium">Back</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
