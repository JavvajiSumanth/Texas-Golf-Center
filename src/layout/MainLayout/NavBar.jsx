import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logos/Texas 9 - Social Logo.png";
import IndexPage from "./IndexPage";
import { FiMenu } from "react-icons/fi";

const LOGIN_URL = "https://login.enochrentals.com/";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hiddenRef = useRef(null);
  // const navRef = useRef(null);
  // const observer = useRef(null);
  // useEffect(() => {
  //   if (observer.current) observer.current.disconnect();
  //   observer.current = new window.IntersectionObserver((entries) => {
  //     if (!navRef.current) return;
  //     if (!entries[0].isIntersecting) {
  //       navRef.current.style.backgroundColor = "white";
  //       navRef.current.style.color = "black";
  //     } else {
  //       navRef.current.style.backgroundColor = "transparent";
  //       navRef.current.style.color = "white";
  //     }
  //   });

  //   const { current: currentObserver } = observer;

  //   currentObserver.observe(hiddenRef.current);
  // }, []);

  return (
    <>
      <div className="fixed z-50 w-full bg-[#162649] text-white">
        <div className="hidden lg:flex items-center font-semibold  links">
          <div className="mr-auto p-4">
            <Link to={"/"}>
              <img className="absolute h-36 top-2" src={LogoImg} alt="Logo" />
            </Link>
          </div>

          <div className="p-4 bg-[#7da33f]">
            <Link to={"/tee-sheet"}>TEE SHEET</Link>
          </div>
          <div className="dropdown p-4">
            <Link to="/golf">
              <button className="dropbtn">GOLF</button>
            </Link>

            <div className="dropdown-content">
              <Link to="/rates">RATES</Link>
              <Link to="/memberships">MEMBERSHIPS</Link>
              <Link to="/lessons">LESSONS</Link>
            </div>
          </div>
          <div className="dropdown p-4">
            <Link to="/fitness">
              <button className="dropbtn">FITNESS</button>
            </Link>
            <div className="dropdown-content">
              <Link to="/fitness-membership">MEMBERSHIPS</Link>

              <div class="relative group2">
                <Link to="/resident-resources">SERVICES</Link>

                <div className="dropdown-content submenu absolute w-fit top-0 left-36 invisible group2-hover:visible">
                  <Link to="/personal-training">PERSONAL TRAINING</Link>
                  <Link to="/golf-mobility">
                    GOLF MOBILITY & STRENGTH TRAINING
                  </Link>
                  <Link to="/massage-therapy">MASSAGE THERAPY</Link>
                  <Link to="/yoga">YOGA</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <Link to={"/event"}>EVENTS</Link>
          </div>

          <div className="p-4">
            <Link to={"/about"}>ABOUT</Link>
          </div>
          <div className="p-4">
            <Link to={"/contact"}>CONTACT</Link>
          </div>
          <a
            href="https://www.google.com/maps/dir//8940+Creek+Run+Rd+Fort+Worth,+TX+76120/@32.7633099,-97.1552483,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x864e7c3f991b1301:0x8f43a2c9599156c3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-4 bg-[#791114] cursor-pointer">
              GET DIRECTIONS
            </div>
          </a>
        </div>
        <div className="h-16 flex lg:hidden items-center text-white p-10">
          <div className="mr-auto p-3">
            <img
              src={LogoImg}
              alt="Logo"
              style={{
                width: "120px",
              }}
            />
          </div>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <FiMenu color="#fff" />{" "}
          </button>
        </div>

        <div
          className={`relative z-10 ${isOpen ? "block" : "hidden"} `}
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto relative w-screen max-w-xs sm:max-w-sm">
                  <div className="flex h-full flex-col overflow-y-scroll bg-black text-white pb-6 shadow-xl">
                    <div className="w-fit flex mt-5 mx-auto rounded-full p-2  border-2 justify-center items-center">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white "
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="4"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-5 mx-auto text-2xl font-bold underline underline-offset-4">
                      <img
                        src={LogoImg}
                        alt="Logo"
                        style={{
                          width: "70%",
                          margin: "0 auto",
                        }}
                      />
                    </div>
                    <div className="relative mt-2 flex-1 px-4 sm:px-6">
                      <IndexPage />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="" ref={hiddenRef}></div>
    </>
  );
};

export default NavBar;
