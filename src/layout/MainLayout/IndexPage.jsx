import React from "react";
import { Link } from "react-router-dom";
export default function IndexPage() {
  return (
    <>
      <div className="flex flex-col justify-between  bg-black">
        <div className="px-4 py-6">
          {/* <div className="flex justify-between gap-5">
            <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-sm text-gray-700 font-semibold cursor-pointer">
              Owner Login
            </span>
            <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-sm text-gray-700 font-semibold cursor-pointer">
              Tenant Login
            </span>
            </div> */}
          <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-lg  px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <span className="text-sm font-medium"> Home </span>
            </Link>
            <Link
              to="/tee-sheet"
              className="flex items-center gap-2 rounded-lg  px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <span className="text-sm font-medium"> Tee Times </span>
            </Link>
            {/* <Link
              to="/golf/memberships"
              className="flex items-center gap-2 rounded-lg  px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <span className="text-sm font-medium"> Memberships </span>
            </Link> */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium"> GOLF </span>
                </div>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
                <Link
                  to="/golf/rates"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Rates </span>
                </Link>

                <Link
                  to="/golf/memberships"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Memberships</span>
                </Link>
                <Link
                  to="/golf/lessons"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Lessons</span>
                </Link>
                <Link
                  to="/golf/lessons"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Lessons</span>
                </Link>
                <Link
                  to="/tee-times"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> TEE TIMES</span>
                </Link>
              </nav>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium"> FITNESS </span>
                </div>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav aria-label="Account Nav" className="mt-2 flex flex-col px-4">
                <Link
                  to="/fitness/fitness-membership"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Memberships</span>
                </Link>
                <Link
                  to="/fitness/services"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> Services</span>
                </Link>

                {/* <Link
                  to="/personal-training"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium">
                    {" "}
                    PERSONAL TRAINING
                  </span>
                </Link>

                <Link
                  to="/golf-mobility"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium">
                    {" "}
                    GOLF MOBILITY & STRENGTH TRAINING
                  </span>
                </Link>
                <Link
                  to="/massage-therapy"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> MASSAGE THERAPY</span>
                </Link>
                <Link
                  to="/yoga"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span className="text-sm font-medium"> YOGA</span>
                </Link> */}
              </nav>
            </details>
            <Link
              to="/event"
              className="flex items-center gap-2 rounded-lg  px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-800"
            >
              <span className="text-sm font-medium"> Event Venue </span>
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium"> About Us </span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="text-sm font-medium"> Contact </span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
