import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import RangeImg from "../../assets/golf/Range.jpg";
import AllCards from "../Reusable/AllCards";
import MainCard from "../Reusable/MainCard";
const Services = () => {
  return (
    <div>
      <MiniHeader heading={"Services"} subHeading={""} />

      <div className="bg-contain bg-no-repeat bg-center bg-[#162649]  pt-6">
        <div className="p-8 grid grid-cols-1 gap-6 w-full mx-auto">
          <MainCard
            Img={RangeImg}
            header={"Personal Training"}
            body={
              "Designed for different skill sets and abilities, swing your way to success with one-on-one or group lessons from a golf professional. different skill sets and abilities, swing your way to success with one-on-one or group lessons from a golf professional."
            }
          />
          <MainCard
            Img={RangeImg}
            header={"MOBILITY AND STRENGTH TRAINING"}
            body={
              "Designed for different skill sets and abilities, swing your way to success with one-on-one or group lessons from a golf professional. different skill sets and abilities, swing your way to success with one-on-one or group lessons from a golf professional."
            }
          />

          <MainCard
            Img={RangeImg}
            header={"YOGA"}
            body={
              "Designed for different skill sets and abilities, swing your way to success with one-on-one or group lessons from a golf professional. different skill sets and abilities, swing your way to success with one-on-one or group lessons from a golf professional."
            }
          />
          <MainCard
            Img={RangeImg}
            header={"MASSAGE THERAPY"}
            body={
              "Designed for different skill sets and abilities, swing your way to success with one-on-one or group lessons from a golf professional. different skill sets and abilities, swing your way to success with one-on-one or group lessons from a golf professional."
            }
          />
        </div>
        <AllCards />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
