import React from "react";
import BGImg from "../../assets/golf/GrassWithLake.jpeg";
import { Link } from "react-router-dom";
const AllCards = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16  font-primary gap-8 mt-10">
      <Link to="/rates">
        <div
          className="h-60 bg-cover"
          style={{
            backgroundImage: `url(${BGImg})`,
          }}
        >
          <h1 className="text-center text-3xl font-semibold mt-4">RATES</h1>
        </div>
      </Link>
      <Link to="/memberships">
        <div
          className="h-60 bg-cover"
          style={{
            backgroundImage: `url(${BGImg})`,
          }}
        >
          <h1 className="text-center text-3xl font-semibold mt-4">
            MEMBERSHIPS
          </h1>
        </div>
      </Link>
      <Link to="/lessons">
        <div
          className="h-60 bg-cover"
          style={{
            backgroundImage: `url(${BGImg})`,
          }}
        >
          <h1 className="text-center text-3xl font-semibold mt-4">LESSONS</h1>
        </div>
      </Link>
      <Link to="/tee-sheet">
        <div
          className="h-60 bg-cover"
          style={{
            backgroundImage: `url(${BGImg})`,
          }}
        >
          <h1 className="text-center text-3xl font-semibold mt-4">TEE TIMES</h1>
        </div>
      </Link>
    </div>
  );
};

export default AllCards;
