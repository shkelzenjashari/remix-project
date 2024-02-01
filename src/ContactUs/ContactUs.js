import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="first-partc">
        <h1>Contact Us</h1>
        <p>
          Reach out to us using the contact form below. <br /> We look forward
          to hearing from you and assisting you with any inquiries or feedback
          you may have.
        </p>
      </div>
      <div className="second-partc">
        <form>
          <div className="form-first">
            <label for="name">Name</label>
            <input type="name" id="name" />

            <label for="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-second">
            <label for="message">Message</label>
            <textarea id="message"></textarea>
          </div>
          <div className="form-third">
            <p>
              This site is protected by reCAPTCHA and the Google <br /> Privacy
              Policy and Terms of Service apply.
            </p>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
