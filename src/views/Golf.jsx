import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import { LiaGolfBallSolid } from "react-icons/lia";
import AllCards from "../components/Reusable/AllCards";
const Golf = () => {
  return (
    <div>
      <MiniHeader heading={"Golf"} subHeading={""} />
      <div className="grid grid-cols-1 gap-y-16  font-primary bg-[#162649] p-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex">
            <img
              src="https://images.pexels.com/photos/1325749/pexels-photo-1325749.jpeg"
              alt="img"
              className="mx-auto object-cover  "
            />
          </div>
          <div className="px-6  md:p-10 bg-stone-100">
            <div className="flex flex-col justify-center h-full text-left gap-5">
              <h1 className="text-4xl font-semibold text-center uppercase">
                Executive 9-Hole Golf Course
              </h1>

              <p className="flex">
                <span className="inline-block mr-2">
                  <LiaGolfBallSolid />
                </span>
                <span className="text-lg  leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  blanditiis molestias provident fugiat numquam quaerat, neque
                  est? Unde ut odio accusantium architecto?
                </span>
              </p>
              <p className="flex">
                <span className="inline-block mr-2">
                  <LiaGolfBallSolid />
                </span>
                <span className="text-lg  leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  blanditiis molestias provident fugiat numquam quaerat, neque
                  est? Unde ut odio accusantium architecto?
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-6  md:p-10 bg-stone-100">
            <div className="flex flex-col justify-center h-full text-left gap-5">
              <h1 className="text-4xl font-semibold text-center uppercase">
                Driving range & practice greens
              </h1>

              <p className="flex">
                <span className="inline-block mr-2">
                  <LiaGolfBallSolid />
                </span>
                <span className="text-lg  leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  blanditiis molestias provident fugiat numquam quaerat, neque
                  est? Unde ut odio accusantium architecto?
                </span>
              </p>
              <p className="flex">
                <span className="inline-block mr-2">
                  <LiaGolfBallSolid />
                </span>
                <span className="text-lg  leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  blanditiis molestias provident fugiat numquam quaerat, neque
                  est? Unde ut odio accusantium architecto?
                </span>
              </p>
            </div>
          </div>
          <div className="flex">
            <img
              src="https://images.pexels.com/photos/1325749/pexels-photo-1325749.jpeg"
              alt="img"
              className="mx-auto object-cover "
            />
          </div>
        </div>
        <AllCards />
      </div>

      <Footer />
    </div>
  );
};

export default Golf;
