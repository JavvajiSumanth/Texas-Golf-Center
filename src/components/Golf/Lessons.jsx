import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import RangeImg from "../../assets/golf/Range.jpg";
import AllCards from "../Reusable/AllCards";
const Lessons = () => {
  return (
    <div>
      <MiniHeader heading={"Lessons"} subHeading={""} />

      <div className="bg-contain bg-no-repeat bg-center bg-[#162649]  pt-6">
        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mx-auto">
          <div className="">
            <img src={RangeImg} alt="hGolfMobility" />
          </div>
          <div className="bg-white p-10 flex flex-col items-center justify-center">
            <h1 className="uppercase tracking-wide text-4xl font-primary font-bold  text-center mt-6">
              LEARN <span className="text-lg">OR </span>ELEVATE
            </h1>
            <h1 className="tracking-wide text-md font-primary text-center font-semibold  my-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              quasi nulla commodi odit voluptates, omnis quis, amet nostrum,
              aspernatur minus nemo quidem quisquam itaque porro tempora earum
              quae? Aut debitis dignissimos eius.
            </h1>

            <button className="bg-green-200 px-4 py-2 w-fit">BOOK NOW</button>
          </div>
        </div>
        <AllCards />
      </div>

      <Footer />
    </div>
  );
};

export default Lessons;
