import React from "react";
import BGImg from "../../assets/golf/GrassWithLake.jpeg";
import GolfTeeTimes from "../../assets/golf/golf-tee-times.jpeg";
import GolfMemberships from "../../assets/golf/golf-memberships.jpeg";
import GolfRates from "../../assets/golf/golf-rates.jpeg";
import GolfLesson from "../../assets/golf/golf-lesson.jpeg";
import { Link } from "react-router-dom";
const AllCards = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16  font-primary gap-8 mt-10">
      <Link to="/golf/rates">
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage: `url(${GolfRates})`,
          }}
        >
          <h1 className="text-center text-3xl font-semibold mt-4">RATES</h1>
        </div>
      </Link>
      <Link to="/golf/memberships">
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage: `url(${GolfMemberships})`,
          }}
        >
          <h1 className="text-center text-3xl font-semibold mt-4">
            MEMBERSHIPS
          </h1>
        </div>
      </Link>
      <Link to="/golf/lessons">
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage: `url(${GolfLesson})`,
          }}
        >
          <h1 className="text-center text-3xl font-semibold mt-4">LESSONS</h1>
        </div>
      </Link>
      <Link to="/tee-times">
        <div
          className="h-60 bg-cover bg-center"
          style={{
            backgroundImage: `url(${GolfTeeTimes})`,
          }}
        >
          <h1 className="text-center text-3xl font-semibold mt-4">TEE TIMES</h1>
        </div>
      </Link>
    </div>
  );
};

export default AllCards;
