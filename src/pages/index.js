import React from "react";
import Banner3 from "../components/banner/Banner3";
import Home3Blog from "../components/blog/Home3Blog";
import Home3Collection from "../components/collection/Home3Collection";
import Footer3 from "../components/footer/Footer3";
import Header3 from "../components/header/Header3";
import Home3Newslatter from "../components/newslatter/Home3Newslatter";
import Home3Testimonial from "../components/testimonial/Home3Testimonial";
import Home1Team from "../components/team/Home1Team";

function HomePage3() {
  return (
    <>
      <Header3 />
      <Banner3 />
      <Home3Collection />
      <Home1Team />
      <Home3Testimonial />
      <Home3Newslatter />
      <Home3Blog />
      <Footer3 />
    </>
  );
}

export default HomePage3;
