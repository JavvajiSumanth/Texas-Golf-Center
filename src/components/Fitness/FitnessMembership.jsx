import { useState } from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";

const FitnessMembership = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  return (
    <div>
      <MiniHeader heading={"GYM Membership"} subHeading={""} />
      <div className="text-slate-100 bg-slate-900 pt-10 font-primary">
        <h1 className=" tracking-wide text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold   font-primary text-center py-8 px-4  w-fit m-auto border rounded-xl">
          Become a TGC GYM member today!
        </h1>
        <div className="m-auto w-full py-8 flex items-center justify-center gap-4 text-xl font-bold">
          <h1>Monthly</h1>
          <label class="switch">
            <input
              type="checkbox"
              checked={isMonthly}
              onChange={() => setIsMonthly(!isMonthly)}
            />
            <span class="slider"></span>
          </label>
          <h1>Yearly</h1>
        </div>
        {!isMonthly ? (
          <div class="mx-4 grid grid-cols-1 pb-8 justify-items-center gap-y-8">
            <div class="card-fitness font-primary">
              <div class="content-membership">
                <div class="text-5xl font-bold font-primary mb-8">
                  Monthly Membership
                </div>

                <div class="description text-justify ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis provident, dolorum minima veniam fuga pariatur
                  placeat, odit magni officiis, harum eum fugiat?
                </div>
                <div className="flex items-center gap-x-4 justify-center my-4 ">
                  <div class="text-xl font-semibold">Monthly Individual </div>
                  <div class="text-4xl font-bold ">$40</div>
                </div>
                <div className="flex items-center gap-x-4 justify-center my-4 ">
                  <div class="text-xl font-semibold">
                    Monthly Additional Family
                    <span className="text-xs block text-left">
                      * Up to 4 additional family members{" "}
                    </span>
                  </div>
                  <div class="text-4xl font-bold tracking-wide">
                    $20
                    <span className="text-xs block text-center">p/p</span>
                  </div>
                </div>
              </div>
              <button className="btn-custom-rate">Buy now</button>
            </div>
          </div>
        ) : (
          <div class="mx-4 grid grid-cols-1 pb-8 justify-items-center gap-y-8">
            <div class="card-fitness font-primary ">
              <div class="content-membership">
                <div class="text-5xl font-bold font-primary mb-8">
                  Yearly Membership
                </div>

                <div class="description text-justify ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis provident, dolorum minima veniam fuga pariatur
                  placeat, odit magni officiis, harum eum fugiat?
                </div>
                <div className="flex items-center gap-x-4 justify-center my-4 ">
                  <div class="text-xl font-semibold">Yearly Individual </div>
                  <div class="text-4xl font-bold ">$432.00</div>
                </div>
                <div className="flex items-center gap-x-4 justify-center my-4 ">
                  <div class="text-xl font-semibold">
                    Yearly Additional Family
                    <span className="text-xs block text-left">
                      * Up to 4 additional family members{" "}
                    </span>
                  </div>
                  <div class="text-4xl font-bold tracking-wide">
                    $216.00
                    <span className="text-xs block text-center">p/p</span>
                  </div>
                </div>
              </div>
              <button className="btn-custom-rate">Buy now</button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FitnessMembership;
