import React from "react";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import AboutUs from "../AboutUs/AboutUs";
import CommonQuestions from "../CommonQuestions/CommonQuestions";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import Swipe from "../PhotoSlider/Swipe";
import PhotoSlider from "../PhotoSlider/PhotoSlider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <PhotoSlider />
      <Swipe />
      <AboutUs />
      <CommonQuestions />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
