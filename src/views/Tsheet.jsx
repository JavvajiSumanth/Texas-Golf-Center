import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import RangeImg from "../assets/golf/range2.jpg";
import { useEffect } from "react";
import AllCards from "../components/Reusable/AllCards";

const Tsheet = () => {
  //REMOVE TSHEET
  useEffect(() => {
    document.getElementById("t-sheet-widget").style.display = "block";

    return () => {
      document.getElementById("t-sheet-widget").style.display = "none";
    };
  }, []);
  //REMOVE TSHEET
  return (
    <div>
      <MiniHeader heading={"Tsheet"} subHeading={""} image={RangeImg} />
      <div className="p-16 bg-[#162649]">
        <div
          className="min-h-[80vh] bg-cover  "
          style={{
            backgroundImage: `url(${RangeImg})`,
          }}
        >
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-4/5 mx-auto">
            <div>
              <h1 className="uppercase tracking-wide text-2xl text-white  font-primary ">
                FITNESS
              </h1>
              <p className="text-secondary mt-4 text-md tracking-wide">
                Let's chat about your real estate management needs.
              </p>
            </div>
          </div>
        </div>
        <AllCards />
      </div>
      <Footer />
    </div>
  );
};

export default Tsheet;
