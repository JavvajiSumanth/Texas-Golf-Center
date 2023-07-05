import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const EventView = () => {
  return (
    <div>
      <MiniHeader heading={"Event Venue"} subHeading={""} />
      <div className="p-10  max-w-screen-lg mx-auto text-center tracking-wide">
        <h1 className="font-primary text-center text-3xl my-10 text-[#a3c332]">
          EVENT
        </h1>
        <hr className="max-w-lg mx-auto" />

        <p className="font-primary my-10  text-secondary leading-6 tracking-widest">
        Banquet Room: 1,800 sq ft. which includes a dance floor overlooking the golf course (125 person capacity)
        </p>

        {/* <p className="font-primary my-10  text-secondary leading-6 tracking-widest">
          Diversifying further, Texas Golf Center multidisciplinary team is
          unmatched in the industry. With both an in-house legal department and
          CPA’s on staff, our operation is able to avoid legal/tax issues at the
          outset and optimize revenue streams to their full potential. In the
          event legal issues do occur, our team can provide legal guidance and
          limit liability efficiently.
        </p> */}
        <hr className="max-w-lg mx-auto" />
      </div>

      <Footer />
    </div>
  );
};

export default EventView;
