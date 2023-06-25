import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import RateImg from "./.././../assets/images/rates.jpg";

const Rates = () => {
  return (
    <div>
      <MiniHeader heading={"Rates"} subHeading={""} />

      <div className="text-slate-100 bg-slate-900 pb-10">
        <h1 className="uppercase tracking-wide text-3xl  sm:text-4xl text-white font-bold   font-primary text-center py-8">
          BOOK YOUR TEE TIME ONLINE
        </h1>
        <h1 className="uppercase tracking-wide text-4xl text-white font-bold   font-primary text-center py-4">
          SPRING RATES
        </h1>
        <div class="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6 justify-items-center gap-y-8">
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
              <div class="price">$10</div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at posuere eros.
              </div>
            </div>
            <button className="btn-custom-rate">Buy now</button>
          </div>
          <div class="card">
            <div class="content">
              <div class="title">9+ CART</div>
              <div class="price">$18</div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at posuere eros.
              </div>
            </div>
            <button className="btn-custom-rate">Buy now</button>
          </div>
          <div class="card">
            <div class="content">
              <div class="title">18 HOLES</div>
              <div class="price">$15</div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at posuere eros.
              </div>
            </div>
            <button className="btn-custom-rate">Buy now</button>
          </div>
          <div class="card">
            <div class="content">
              <div class="title">18+ CART</div>
              <div class="price">$25</div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur at posuere eros.
              </div>
            </div>
            <button className="btn-custom-rate">Buy now</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rates;
