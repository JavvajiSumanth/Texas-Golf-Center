import React from "react";
import About from "../components/Home/About";
import LeaveAMessage from "../components/Home/LeaveAMessage";
import Header from "../layout/MainLayout/Header";
import Footer from "../reusable/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <LeaveAMessage header={"LEAVE A MESSAGE"} />
      <Footer />
    </>
  );
};

export default Home;
