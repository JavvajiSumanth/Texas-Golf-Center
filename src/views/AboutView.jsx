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
        Your Ultimate Destination for Golf and more in the DFW Area!
Our 9-Hole Executive Golf Course is perfect for golf enthusiasts of all levels. We go above and beyond to provide you with an unforgettable experience. Our Lighted Driving Range spanning over 10 acres is a golfer's paradise, allowing you to perfect your swing even after sunset. Practice your putting skills on our professionally designed putting green, or take on the challenge of our chipping practice green and sand bunker area. And when it's time to relax and unwind, Texas 9 has got you covered. Take a break from the game and enjoy a friendly game of pool or cornhole with your friends and fellow golfers. It's the perfect way to socialize and make lasting memories.

Experience the Best of Golf at Texas 9, where skill meets excitement. Swing your way to success with one-on-one or group lessons from a golf professional. Call today to book your lesson!

We believe in providing a holistic experience for our valued guests. That's why we've added a Fitness Center to our facility, equipped with state-of-the-art equipment including free weights, treadmills, cable machines, and bikes. Stay in shape while enjoying your favorite sport!

Looking for a venue for your special occasions? Look no further than Texas 9. Our versatile event spaces are ready to host your memorable moments, whether it's a birthday party, corporate event, or any other celebration. Our dedicated team will ensure every detail is taken care of, leaving you free to enjoy the festivities.

Become a part of the Texas 9 community! With Individual & Family Memberships available, you can enjoy unlimited access to our top-notch facilities and exclusive benefits throughout the year.

Visit us today and discover the perfect blend of golf, leisure, and entertainment!
        </p>

        <p className="font-primary my-10  text-secondary leading-6 tracking-widest">
          {/* Diversifying further, Texas 9 multidisciplinary team is
          unmatched in the industry. With both an in-house legal department and
          CPA’s on staff, our operation is able to avoid legal/tax issues at the
          outset and optimize revenue streams to their full potential. In the
          event legal issues do occur, our team can provide legal guidance and
          limit liability efficiently. */}
        </p>
        <hr className="max-w-lg mx-auto" />
      </div>

      <LeaveAMessage header={"LEAVE A MESSAGE"} />
      <Footer />
    </div>
  );
};

export default AboutView;
