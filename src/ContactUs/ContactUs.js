import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div id="contact">
      <div className="first-partc">
        <h1>Na kontakto</h1>
        <p>
          Na kontaktoni duke shkruar te dhenat e juaja. <br />
          Ne jemi te hapur per <br /> pytje dhe kritika
        </p>
      </div>
      <div className="second-partc">
        <form>
          <div className="form-first">
            <label for="name">Emri</label>
            <input type="name" id="name" />

            <label for="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-second">
            <label for="message">Mesazhi</label>
            <textarea id="message"></textarea>
          </div>
          <div className="form-third">
            <p>
              Kjo faqe mbrohet nga reCAPTCHA <br />
              dhe Politikën e Privatësisë së Google <br />
              dhe zbatohen Kushtet e Shërbimit.
            </p>
            <button type="submit">Dergo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
