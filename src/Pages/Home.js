import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import CommonQuestions from "../CommonQuestions/CommonQuestions";
import ContactUsHome from "../ContactUs/ContactUsHome";
import FaceitStatsHome from "../FaceitStats/FaceitStatsHome";
import Footer from "../Footer/Footer";
import Intro from "../Intro/Intro";
import Navbar from "../Navbar/Navbar";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import Reviews from "../Reviews/Reviews";

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
