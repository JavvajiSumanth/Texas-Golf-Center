import GolfPng from "../.././assets/golf/white-logo.png";
import GYMImg from "../.././assets/golf/gym.jpg";
import RangeImg from "../.././assets/golf/Range.jpg";
import Range2Img from "../.././assets/golf/range2.jpg";
import BGImg from "../.././assets/golf/BG1.jpeg";
import TEETimesImg from "../.././assets/golf/teetimes.jpg";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const images = [Range2Img, RangeImg, TEETimesImg, GYMImg, BGImg];
const Header = () => {
  // const [url, setUrl] = useState(
  //   "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
  // );

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setUrl(images[Math.floor(Math.random() * images.length)]);
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <>
      <NavBar />

      <div className="pt-14 h-100 lg:h-screen overflow-hidden font-primary ">
        <div className="h-100 lg:h-screen  absolute t-10 lg:max-h-screen z-10 w-full h-full ">
          <div className="hidden lg:block absolute top-[40%] left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl  font-light w-[95vw] text-center bg-dark my-10  tracking-wide">
              PRACTICE{" "}
              <span className="h-4 w-4 bg-white rounded-full inline-block mb-7"></span>{" "}
              PLAY{" "}
              <span className="h-4 w-4 bg-white rounded-full inline-block mb-7"></span>{" "}
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
          </div>
          <div className="block lg:hidden absolute top-[15%] md:top-1/4 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl   font-light w-[95vw] text-center bg-dark my-10 font-sans tracking-wide">
              PRACTICE{" "}
              <span className=" h-2 sm:h-3  w-2 sm:w-3 bg-white rounded-full inline-block mb-2 sm:mb-4"></span>{" "}
              PLAY{" "}
              <span className=" h-2 sm:h-3  w-2 sm:w-3 bg-white rounded-full inline-block mb-2 sm:mb-4"></span>{" "}
              CELEBRATE{" "}
            </h1>
          </div>

          <img
            className="absolute left-5 bottom-12 hidden lg:block"
            src={GolfPng}
            alt="the "
          />
        </div>

        <Carousel
          autoPlay
          infiniteLoop
          swipeable={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          interval={4000}
          stopOnHover={false}
          className=""
        >
          {images.map((image, idx) => (
            <div className="h-full w-full carousel-image-item" key={idx}>
              <img className="h-full w-full bg-cover" src={image} alt="the " />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Header;
