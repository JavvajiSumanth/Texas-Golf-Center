import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";

const Rates = () => {
  return (
    <div>
      <MiniHeader heading={"Rates"} subHeading={""} />

      <div className="text-slate-100 bg-lime-950 pb-10">
        <h1 className="uppercase tracking-wide text-3xl  sm:text-4xl text-green-600 font-bold   font-primary text-center py-8">
          BOOK YOUR TEE TIME ONLINE
        </h1>
        <h1 className="uppercase tracking-wide text-4xl text-green-600 font-bold   font-primary text-center py-4">
          RATES
        </h1>
        <div class="mx-4 grid grid-cols-1 md:grid-cols-2 py-6 justify-items-center gap-y-8">
          {/* <div class="mb-4 break-inside p-6 rounded-xl bg-slate-800 flex flex-col bg-clip-border">
            <h2 class="text-3xl font-extrabold dark:text-white">
              Web Design templates Selection
            </h2>

            <p class="dark:text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div> */}
          <div class="card">
            <div class="content">
              <div class="title">9 HOLES</div>
              <div class="price text-green-800">$10</div>
              <div class="description">
                Enjoy a quick and affordable golfing experience with 9 Holes,
                where you can tee off for just $10.
              </div>
            </div>
            {/* <button className="btn-custom-rate">Buy now</button> */}
          </div>
          <div class="card">
            <div class="content">
              <div class="title">9+ CART</div>
              <div class="price text-green-800">$18</div>
              <div class="description">
                Enhance your golfing adventure with the convenience and comfort
                of a cart while playing more than 9 Holes, all for an unbeatable
                price of $18.
              </div>
            </div>
            {/* <button className="btn-custom-rate">Buy now</button> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rates;
