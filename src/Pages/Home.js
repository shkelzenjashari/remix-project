import React from "react";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import AboutUs from "../AboutUs/AboutUs";
import CommonQuestions from "../CommonQuestions/CommonQuestions";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import PhotoSlider from "../PhotoSlider/PhotoSlider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <PhotoSlider />
      <AboutUs />
      <CommonQuestions />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
