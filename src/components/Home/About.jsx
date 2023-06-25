import React from "react";

const About = () => {
  return (
    <div className="min-h-[60vh] grid grid-cols-1 lg:grid-cols-2">
      <div>
        <img
          src="https://images.pexels.com/photos/1325749/pexels-photo-1325749.jpeg"
          alt="img"
          className="mx-auto object-cover w-100 h-100"
        />
      </div>
      <div className="px-6 py-20 md:p-20 bg-stone-100">
        <div className="flex flex-col justify-center h-full text-left gap-5">
          <h3 className=" text-[#333333] text-2xl font-primary">ABOUT US</h3>
          <p className="text-secondary text-xl ">Texas Golf Center</p>

          <p className="text-secondary text-lg leading-relaxed">
            To us, Property Management not only includes the basic operation,
            control and oversight of real estate assets, but it also means
            developing strategies and taking actions to maximize property values
            and investment returns.
          </p>
          <p className="text-secondary text-lg leading-relaxed">
            This is what separates Texas Golf Center from the rest. We are
            driven to find ways to reduce expenditures, expand revenue streams,
            harmonize tenant relations, and take actions today that will create
            value tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
