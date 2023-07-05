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
          <h3 className=" text-[#a3c332] text-2xl font-primary">ABOUT US</h3>
          <p className="text-secondary text-xl ">Texas 9</p>

          <p className="text-secondary text-lg leading-relaxed">
          Texas 9 offers an exceptional golf experience with a 9-hole executive course, a lighted driving range, practice greens, and a range of amenities including a fitness center. With professional golf lessons, versatile event spaces, and memberships available, it's a destination that combines golf, leisure, and entertainment. 
          </p>
          {/* <p className="text-secondary text-lg leading-relaxed">
            This is what separates Texas Golf Center from the rest. We are
            driven to find ways to reduce expenditures, expand revenue streams,
            harmonize tenant relations, and take actions today that will create
            value tomorrow.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default About;
