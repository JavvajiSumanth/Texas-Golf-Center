import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";

const Fitness = () => {
  return (
    <div>
      <MiniHeader heading={"Fitness"} subHeading={""} />

      <div className="min-h-[80vh] bg-contain bg-no-repeat bg-center ">
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-4/5 mx-auto">
          <div>
            <h1 className="uppercase tracking-wide text-2xl text-white  font-primary ">
              GET IN TOUCH
            </h1>
            <p className="text-secondary mt-4 text-md tracking-wide">
              Let's chat about your real estate management needs.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Fitness;
