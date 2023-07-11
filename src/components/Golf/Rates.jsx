import { useEffect } from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import BGImg from "../../assets/golf/BG1.jpeg";
import AllCards from "../Reusable/AllCards";
const Rates = () => {
  return (
    <div>
      <MiniHeader heading={"Rates"} subHeading={""} />

      <div className="p-16 bg-[#162649]">
        <div
          className="text-slate-100 pb-10 bg-cover bg-center font-primary"
          style={{
            backgroundImage: `url(${BGImg})`,
          }}
        >
          {/* <h1 className="uppercase tracking-wide text-4xl  sm:text-5xl text-black font-bold   font-primary text-center py-8">
          BOOK YOUR TEE TIME ONLINE
        </h1>
        <h1 className="uppercase tracking-wide text-4xl text-black font-bold   font-primary text-center py-4">
          RATES
        </h1> */}
          <div className="grid grid-cols-1 md:grid-cols-2 p-6 justify-items-center gap-y-8 gap-x-10 max-w-6xl mx-auto ">
            <div className="card">
              <div className="content">
                <div className="font-bold text-3xl">MONDAY - THURSDAY</div>
                <div className="flex justify-around">
                  <div>
                    <div className="title">9 HOLES</div>
                    <div className="price text-green-800">$8</div>
                  </div>
                  <div>
                    <div className="title">9 HOLES + CART</div>
                    <div className="price text-green-800">$12</div>
                  </div>
                </div>
                <div className="text-md">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  dolore quos officia, dolorum vero asperiores incidunt enim
                  architecto? Odio eligendi sequi animi.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="font-bold text-3xl">FRIDAY - SUNDAY</div>
                <div className="flex justify-around">
                  <div>
                    <div className="title">9 HOLES</div>
                    <div className="price text-green-800">$10</div>
                  </div>
                  <div>
                    <div className="title">9 HOLES + CART</div>
                    <div className="price text-green-800">$18</div>
                  </div>
                </div>
                <div className="text-md">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  dolore quos officia, dolorum vero asperiores incidunt enim
                  architecto? Odio eligendi sequi animi.
                </div>
              </div>
            </div>
          </div>
        </div>
        <AllCards />
      </div>

      <Footer />
    </div>
  );
};

export default Rates;
