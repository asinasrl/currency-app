import React from "react";
import HomeComp from "./components/HomeComp";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="grid grid-rows-[50px,1fr,50px] h-screen">
      <Header />
      <HomeComp />
      <Footer />
    </div>
  );
};

export default Home;
