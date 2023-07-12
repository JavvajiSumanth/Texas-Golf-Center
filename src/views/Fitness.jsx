import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import RangeImg from "../assets/golf/range2.jpg";
import FitnessCards from "../components/Reusable/FitnessCards";

const Fitness = () => {
  return (
    <div>
      <MiniHeader heading={"Fitness"} />

      <div className="p-16 bg-[#162649]">
        <FitnessCards />
      </div>

      <Footer />
    </div>
  );
};

export default Fitness;
