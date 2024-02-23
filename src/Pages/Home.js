import React from "react";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import AboutUs from "../AboutUs/AboutUs";
import CommonQuestions from "../CommonQuestions/CommonQuestions";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import Reviews from "../Reviews/Reviews";
import FaceitStatsHome from "../FaceitStats/FaceitStatsHome";
import ContactUsHome from "../ContactUs/ContactUsHome";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <PhotoSlider />
      <AboutUs />
      <CommonQuestions />
      <Reviews />
      <ContactUsHome />
      <FaceitStatsHome />
      <Footer />
    </div>
  );
};

export default Home;
