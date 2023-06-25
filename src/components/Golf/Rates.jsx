import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import RateImg from "./.././../assets/images/rates.jpg";

const Rates = () => {
  return (
    <div>
      <MiniHeader heading={"Rates"} subHeading={""} />

      <div className="text-slate-100 bg-slate-900 pb-10">
        <h1 className="uppercase tracking-wide text-4xl text-white font-bold   font-primary text-center py-8">
          BOOK YOUR TEE TIME ONLINE
        </h1>
        {/* <div class="max-w-7xl mx-4 grid grid-cols-2 py-10">
          <div class="mb-4 break-inside p-6 rounded-xl bg-slate-800 flex flex-col bg-clip-border">
            <h2 class="text-3xl font-extrabold dark:text-white">
              Web Design templates Selection
            </h2>
            <div class="py-4">
              <div class="flex justify-between gap-1 mb-1">
                <a class="flex" href="#">
                  <img
                    class="max-w-full rounded-tl-lg"
                    src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  />
                </a>
              </div>
            </div>
            <p class="dark:text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div> */}
        <div
          className="h-[900px] bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: `url(${RateImg})`,
          }}
        ></div>
        {/* <img src={RateImg} alt="img" /> */}
      </div>

      <Footer />
    </div>
  );
};

export default Rates;
