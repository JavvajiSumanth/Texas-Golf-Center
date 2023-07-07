import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

// const images = [
//   "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
//   "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg",
//   "https://images.pexels.com/photos/5524205/pexels-photo-5524205.jpeg",
//   "https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg",
//   "https://images.pexels.com/photos/6969866/pexels-photo-6969866.jpeg",
// ];

import Image from "../.././assets/golf/home.jpg";
import GolfPng from "../.././assets/logos/Texas 9 Golf Alternate.png";
const Header = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="h-screen  absolute min-h-screen z-10 w-full">
        <NavBar />

        {/* <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-white text-sm sm:text-xl  text-center">
            TEXAS 9
          </h1>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-light w-[95vw] text-center bg-dark my-10 font-sans tracking-wide">
            PRACTICE{" "}
            <span className="h-3 w-3 bg-white rounded-full inline-block mb-4"></span>{" "}
            PLAY{" "}
            <span className="h-3 w-3 bg-white rounded-full inline-block mb-4"></span>{" "}
            CELEBRATE{" "}
          </h1>

          <div className="flex justify-center flex-col items-center sm:flex-row">
            <Link
              to="rates"
              className="transition-colors duration-300 font-semibold text-white px-5 py-3 text-md rounded-full outline outline-1 sm:mr-5 mb-4 sm:mb-0 hover:bg-[#a3c332] hover:outline-[#a3c332] min-w-[190px] text-center cursor-pointer"
            >
              GET STARTED TODAY
            </Link>
           
          </div>
        </div> */}
        <img
          className="absolute h-72 right-16 top-24"
          src={GolfPng}
          alt="the "
        />
      </div>
      <div className="carousel-image-item">
        <img className="h-full w-full object-center" src={Image} alt="the " />
      </div>
    </div>
  );
};

export default Header;
