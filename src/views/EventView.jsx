import MainCard from "../components/Reusable/MainCard";
import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import RangeImg from "../assets/golf/Range.jpg";
const EventView = () => {
  return (
    <div>
      <MiniHeader heading={"Event Venue"} subHeading={""} />
      <div className="bg-contain bg-no-repeat bg-center bg-[#162649]  pt-6">
        <div className="p-8 grid grid-cols-1 gap-6 w-full mx-auto">
          <MainCard
            Img={RangeImg}
            header={"VENUE"}
            body={
              "Our versatile event spaces are ready to host your memorable moments, whether it's a birthday party, corporate event, or any other celebration. Our dedicated team will ensure every detail is taken care of, leaving you free to enjoy the festivities."
            }
            button={"Book Now"}
          />
          <MainCard
            Img={RangeImg}
            header={"EVENTS"}
            body={
              "Our versatile event spaces are ready to host your memorable moments, whether it's a birthday party, corporate event, or any other celebration. Our dedicated team will ensure every detail is taken care of, leaving you free to enjoy the festivities."
            }
            button={"Request Information"}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventView;
