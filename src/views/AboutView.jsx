import About from "../components/Home/About";
import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LeaveAMessage from "../components/Home/LeaveAMessage";
const AboutView = () => {
  return (
    <div>
      <MiniHeader heading={"About Us"} subHeading={""} />
      <div className="p-10  max-w-screen-lg mx-auto text-center tracking-wide">
        <h1 className="font-primary text-center text-3xl my-10 text-[#a3c332]">
          ABOUT
        </h1>
        <hr className="max-w-lg mx-auto" />

        <p className="font-primary my-10  text-secondary leading-6 tracking-widest">
          Established in 2015, Texas Golf Center is full-service residential and
          commercial property management company servicing Fort Worth with an
          unwavering dedication toward the optimization of each property under
          management. With offices in Fort Worth, Texas Golf Center is able to
          meticulously manage client investments thoroughout Fort Worth,
          ensuring each is operating at its highest and best use.
        </p>

        <p className="font-primary my-10  text-secondary leading-6 tracking-widest">
          Diversifying further, Texas Golf Center multidisciplinary team is
          unmatched in the industry. With both an in-house legal department and
          CPA’s on staff, our operation is able to avoid legal/tax issues at the
          outset and optimize revenue streams to their full potential. In the
          event legal issues do occur, our team can provide legal guidance and
          limit liability efficiently.
        </p>
        <hr className="max-w-lg mx-auto" />
      </div>

      <LeaveAMessage header={"TELL US ABOUT YOUR PROPERTY NEEDS"} />
      <Footer />
    </div>
  );
};

export default AboutView;
