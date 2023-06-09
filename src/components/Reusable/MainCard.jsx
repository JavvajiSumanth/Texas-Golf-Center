import React from "react";

const MainCard = ({ Img, header, body, link, button, footer }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div className="">
        <img src={Img} alt="hGolfMobility" />
      </div>
      <div className="bg-white p-10 flex flex-col items-center justify-center relative">
        <h1 className="uppercase tracking-wide text-4xl font-primary font-bold  text-center mt-6">
          {header}
        </h1>
        <h1 className="tracking-wide text-md font-primary text-center font-semibold  my-3 ">
          {body}
        </h1>

        {button && (
          <button className="bg-green-600 absolute bottom-10 px-4 py-2 w-fit uppercase text-white font-bold rounded">
            {button || "Book Now"}
          </button>
        )}
        {footer && (
          <h1 className="absolute bottom-5 right-5 font-semibold">{footer}</h1>
        )}
      </div>
    </div>
  );
};

export default MainCard;
