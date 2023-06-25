import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import LeaveAMessage from "../components/Home/LeaveAMessage";
import { HiLocationMarker } from "react-icons/hi";
import { BiAlarm, BiPhone } from "react-icons/bi";
import { BsMailbox, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiKeyring } from "react-icons/gi";
const Contact = () => {
  return (
    <div>
      <MiniHeader heading={"Contact Us"} subHeading={""} />

      <LeaveAMessage header={"MESSAGE US BELOW!"} />
      <div className="bg-white  px-4 ">
        <div className=" md:p-10 md:py-4 mx-auto ">
          <h1 className="font-primary tracking-wide text-3xl text-center mt-8">
            You Can Find Us @
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full max-w-screen-xl mx-auto p-5">
            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <HiLocationMarker />
              </div>

              <div>
                <h2 className="font-primary text-xl mb-1">Fort Worth Office</h2>
                <p className="text-black">
                  <a
                    href="https://www.bing.com/maps?osid=33722351-871f-4413-961a-de30d5342d6d&cp=32.763407~-97.155837&lvl=16&v=2&sV=2&form=S00027"
                    target={"_blank"}
                  >
                    <span>8940 Creek Run Rd Fort Worth, TX 76120</span>
                  </a>
                </p>
              </div>
            </div>

            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <BiPhone />
              </div>

              <div>
                <h2 className="font-primary text-xl mb-1">
                  <a href="tel:+1-817-600-6228">+1 (817) 600-6228</a>
                </h2>
              </div>
            </div>

            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <BsMailbox />
              </div>

              <div>
                <h2 className="font-primary text-xl mb-1">
                  <a href="mailto:rent@enochdfw.com">rent@enochdfw.com</a>
                </h2>
              </div>
            </div>

            <div className="w-full flex gap-5">
              <div className="mt-[-4px]">
                <BiAlarm />
              </div>

              <div>
                <h2 className="font-primary text-xl mb-1">
                  M-F 8:30 am – 5 pm
                  <br /> Saturday 9 am – 2 pm
                  <br />
                  Our office is closed Sundays.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

// Texas Golf Center
// 8940 Creek Run Rd
// Fort Worth, TX 76120
// (817) 600-6228
// rent@enochdfw.com
