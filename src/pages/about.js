import React from "react";
import Home1About from "../components/about/Home1About";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ChooseUs from "../components/chooseUs/ChooseUs";
import AboutService from "../components/service/AboutService";
import Home1Testimonial from "../components/testimonial/Home1Testimonial";
import Layout from "../layout/Layout";

function AboutPage() {
  return (
    <>
      <Layout>
        <Breadcrumb pageName="About Me" pageTitle="About Me" />
        {/* <Home1About /> */}
        <div className="mt-120">
          <AboutService />
        </div>
        <Home1Testimonial />
        {/* <ChooseUs /> */}
      </Layout>
    </>
  );
}

export default AboutPage;
