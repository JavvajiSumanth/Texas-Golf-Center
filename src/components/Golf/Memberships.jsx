import { useState } from "react";
import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import MembershipImg from "./.././../assets/images/membership.png";

const Membership = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  return (
    <div>
      <MiniHeader heading={"Membership"} subHeading={""} />
      <div className="text-slate-100 bg-lime-950 pt-10 font-primary">
        <h1 className=" tracking-wide text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-green-600 font-bold  font-primary text-center py-8 px-4  w-fit m-auto rounded-xl">
          Become a Texas 9 member today!
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
          <div class="mx-4 grid grid-cols-1  lg:grid-cols-2 pb-6 justify-items-center gap-y-8">
            <div class="card-member font-primary">
              <div class="content-membership">
                <div class="text-5xl font-bold font-primary text-green-600">
                  Hole-in-One
                </div>
                <div class="title font-primary text-4xl">
                  Monthly Membership
                </div>
                <div class="description text-justify ">
                  Experience our golf course during member rounds, unlimited
                  driving rage balls, full access to the gym & 15% off yoga.
                </div>
                <div className="flex items-center gap-x-4 justify-center my-4 ">
                  <div class="text-xl font-semibold">Monthly Individual </div>
                  <div class="text-4xl font-bold ">$99</div>
                </div>
                <div className="flex items-center gap-x-4 justify-center my-4 ">
                  <div class="text-xl font-semibold">
                    Monthly Additional Family
                    <span className="text-xs block text-left">
                      * Up to 4 additional family members{" "}
                    </span>
                  </div>
                  <div class="text-4xl font-bold tracking-wide">
                    $50
                    <span className="text-xs block text-center">p/p</span>
                  </div>
                </div>
              </div>
              {/* <button className="btn-custom-rate">Buy now</button> */}
            </div>
            <div class="card-member font-primary">
              <div class="content-membership">
                <div class="text-5xl font-bold font-primary text-green-600">
                  Range
                </div>
                <div class="title font-primary text-4xl">
                  Monthly Membership
                </div>
                <div class="description text-justify ">
                  Perfect your game with unlimited range balls on the driving
                  range.
                </div>
                <div className="flex items-center gap-x-4 justify-center my-4 ">
                  <div class="text-xl font-semibold">Monthly Individual </div>
                  <div class="text-4xl font-bold ">$70</div>
                </div>
                <div className="flex items-center gap-x-4 justify-center my-4 ">
                  <div class="text-xl font-semibold">
                    Monthly Additional Family
                    <span className="text-xs block text-left">
                      * Up to 4 additional family members{" "}
                    </span>
                  </div>
                  <div class="text-4xl font-bold tracking-wide">
                    $35
                    <span className="text-xs block text-center">p/p</span>
                  </div>
                </div>
              </div>
              {/* <button className="btn-custom-rate">Buy now</button> */}
            </div>
          </div>
        ) : (
          <div class="mx-4 grid grid-cols-1  lg:grid-cols-2 pb-6 justify-items-center gap-y-8">
            <div class="card-member font-primary">
              <div class="content-membership">
                <div class="text-5xl font-bold font-primary text-green-600">
                  Hole-in-One
                </div>
                <div class="title font-primary text-4xl">Yearly Membership</div>
                <div class="description text-justify ">
                  Experience our golf course during member rounds, unlimited
                  driving rage balls, full access to the gym & 15% off yoga.
                </div>
                <div className="flex items-center gap-x-4 justify-center my-4 ">
                  <div class="text-xl font-semibold">Yearly Individual </div>
                  <div class="text-4xl font-bold ">$1,069</div>
                </div>
                <div className="flex items-center gap-x-4 justify-center my-4 ">
                  <div class="text-xl font-semibold">
                    Yearly Additional Family
                    <span className="text-xs block text-left">
                      * Up to 4 additional family members{" "}
                    </span>
                  </div>
                  <div class="text-4xl font-bold tracking-wide">
                    $540
                    <span className="text-xs block text-center">p/p</span>
                  </div>
                </div>
              </div>
              {/* <button className="btn-custom-rate">Buy now</button> */}
            </div>
            <div class="card-member font-primary">
              <div class="content-membership">
                <div class="text-5xl font-bold font-primary text-green-600">
                  Range
                </div>
                <div class="title font-primary text-4xl">Yearly Membership</div>
                <div class="description text-justify ">
                  Perfect your game with unlimited range balls on the driving
                  range.
                </div>
                <div className="flex items-center gap-x-4 justify-center my-4 ">
                  <div class="text-xl font-semibold">Yearly Individual </div>
                  <div class="text-4xl font-bold ">$756</div>
                </div>
                <div className="flex items-center gap-x-4 justify-center my-4 ">
                  <div class="text-xl font-semibold">
                    Yearly Additional Family
                    <span className="text-xs block text-left">
                      * Up to 4 additional family members{" "}
                    </span>
                  </div>
                  <div class="text-4xl font-bold tracking-wide">
                    $324
                    <span className="text-xs block text-center">p/p</span>
                  </div>
                </div>
              </div>
              {/* <button className="btn-custom-rate bg-green-500">Buy now</button> */}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Membership;
