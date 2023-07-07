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
      <h1 className="uppercase tracking-wide text-3xl text-white text-center font-primary py-16">
        {header}
      </h1>
      {submitted && (
        <h1 className="text-white text-center font-primary text-xl">
          Submitted Successfully !!
        </h1>
      )}
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-4/5 mx-auto">
        <div>
          <h1 className="uppercase tracking-wide text-2xl text-white  font-primary ">
            GET IN TOUCH
          </h1>
          <p className="text-white mt-4 text-md tracking-wide">
            Let's talk about your golfing experience at Texas Golf Center.
          </p>
        </div>
        <form onSubmit={handleSubmit} ref={form}>
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
