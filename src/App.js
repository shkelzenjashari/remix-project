import AboutUs from "./AboutUs/AboutUs";
import Accordion from "./Accordion/Accordion";
import CommonQuestions from "./CommonQuestions/CommonQuestions";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import Intro from "./Intro/Intro";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Accordion />
      <AboutUs />
      <CommonQuestions />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
