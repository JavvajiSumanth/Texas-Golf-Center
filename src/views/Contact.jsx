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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.0913741426257!2d-97.1552483!3d32.763309899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7c3f991b1301%3A0x8f43a2c9599156c3!2s8940%20Creek%20Run%20Rd%2C%20Fort%20Worth%2C%20TX%2076120!5e0!3m2!1sen!2sus!4v1687719563220!5m2!1sen!2sus"
        width="100%"
        height="100%"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="map"
        style={{
          minHeight: 300,
          border: 0,
        }}
      ></iframe>

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
