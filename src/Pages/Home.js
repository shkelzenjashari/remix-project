import React from "react";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import Accordion from "../Accordion/Accordion";
import AboutUs from "../AboutUs/AboutUs";
import CommonQuestions from "../CommonQuestions/CommonQuestions";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Accordion />
      <AboutUs />
      <CommonQuestions />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
