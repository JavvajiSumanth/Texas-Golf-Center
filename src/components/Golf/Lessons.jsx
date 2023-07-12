import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import RangeImg from "../../assets/golf/Range.jpg";
import AllCards from "../Reusable/AllCards";
import MainCard from "../Reusable/MainCard";
const Lessons = () => {
  return (
    <div>
      <MiniHeader heading={"Lessons"} subHeading={""} />

      <div className="bg-contain bg-no-repeat bg-center bg-[#162649]  pt-6">
        <div className="p-8 grid grid-cols-1 gap-6 w-full mx-auto">
          <MainCard
            Img={RangeImg}
            header={"LEARN OR ELEVATE"}
            body={
              "Designed for different skill sets and abilities, swing your way to success with one-on-one or group lessons from a golf professional."
            }
          />
          <MainCard
            Img={RangeImg}
            header={"Private Instruction"}
            body={
              "Designed for different skill sets and abilities, swing your way to success with one-on-one or group lessons from a golf professional."
            }
          />
        </div>
        <AllCards />
      </div>

      <Footer />
    </div>
  );
};

export default Lessons;
