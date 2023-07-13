import React, { useRef, useState } from "react";
import MapImg from "../../assets/golf/range2.jpg";
import emailjs from "@emailjs/browser";

const LeaveAMessage = ({ header }) => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const descriptionRef = useRef(null);
  const resetRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      emailjs
        .sendForm(
          "service_qmvz2k7",
          "template_p5sk22s",
          form.current,
          "pKr5g4rAla9WuxUbp"
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((err) => {
          console.log(err);
        });

      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const form = useRef();
  return (
    <div
      className="min-h-[80vh] bg-cover bg-no-repeat bg-center "
      style={{
        // backgroundImage: `linear-gradient(to right,#000000a8, #000000a8), url(${MapImg})`,

        backgroundImage: `linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.68)), url(${MapImg})`,
      }}
    >
      {submitted && (
        <h1 className="text-white text-center font-primary text-xl">
          Submitted Successfully !!
        </h1>
      )}
      <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mx-auto">
        <div className="flex items-center pt-0 lg:pt-28">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.0913741426257!2d-97.1552483!3d32.763309899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7c3f991b1301%3A0x8f43a2c9599156c3!2s8940%20Creek%20Run%20Rd%2C%20Fort%20Worth%2C%20TX%2076120!5e0!3m2!1sen!2sus!4v1687719563220!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            style={{
              maxHeight: 400,
              minHeight: 300,
              border: 0,
            }}
          ></iframe>
        </div>
        <form onSubmit={handleSubmit} ref={form} className="max-w-xl mx-auto">
          <h1 className="uppercase tracking-wide text-3xl text-[#a3c332] text-center font-primary py-16 font-bold">
            {header}
          </h1>
          <input
            className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4 text-white caret-white placeholder:text-white"
            type="text"
            placeholder="First & Last Name"
            required
            ref={nameRef}
            name="from_name"
          />
          <input
            className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4 text-white caret-white placeholder:text-white"
            type="email"
            placeholder="Email"
            required
            name="from_email"
            ref={emailRef}
          />
          <input
            className="bg-transparent outline outline-1 outline-white mb-4 h-14 w-full max-w-screen-md rounded-sm p-4 text-white caret-white placeholder:text-white"
            type="tel"
            placeholder="Phone"
            required
            ref={phoneRef}
            name="from_phone"
          />
          <textarea
            className="bg-transparent outline outline-1 outline-white mb-4 w-full max-w-screen-md rounded-sm p-4 text-white caret-white placeholder:text-white"
            name="message"
            id="description"
            required
            cols="30"
            rows="6"
            ref={descriptionRef}
            placeholder="Tell us about your golf facility requirements."
          ></textarea>

          <button
            type="submit"
            className="uppercase px-12 py-2 rounded-full outline outline-1 outline-white hover:outline-[#a3c332] font-primary text-white  hover:bg-[#a3c332]"
          >
            Submit
          </button>
          <button type="reset" className="hidden" ref={resetRef}>
            Rest
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeaveAMessage;
