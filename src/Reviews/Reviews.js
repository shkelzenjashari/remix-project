import React from "react";
import "./reviews.css";
import star from "../images/star-rating.png";
import avatar from "../images/avatar.png";
import erlind from "../images/erlind.png";
import arlind from "../images/arlind.png";
import arvanit from "../images/arvanit.png";
import ertural from "../images/ertural.jpg";

const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <h1 className="reviews-headline">Reviews</h1>
      <div className="reviews">
        <div className="review">
          <img className="star" src={star} alt="stars" />
          <p>"Another level"</p>
          <div className="profile">
            <a href="https://maps.app.goo.gl/VTxqnbtfoe34M5zQ8" target="_blank">
              <img className="avatar" src={erlind} alt="profile" />
            </a>
            <p>Erlind Behrami</p>
          </div>
          <a href="https://maps.app.goo.gl/VTxqnbtfoe34M5zQ8" target="_blank">
            Read more
          </a>
        </div>

        <div className="review">
          <img className="star" src={star} alt="stars" />
          <p>"🔥…"</p>
          <div className="profile">
            <a href="https://maps.app.goo.gl/MbaCtnkMGxqQaMqZ9" target="_blank">
              <img className="avatar" src={arlind} alt="profile" />
            </a>
            <p>Arlind Dubova</p>
          </div>
          <a href="https://maps.app.goo.gl/MbaCtnkMGxqQaMqZ9" target="_blank">
            Read more
          </a>
        </div>

        <div className="review">
          <img className="star" src={star} alt="stars" />
          {/* <p>"🌟🌟🌟🌟🌟"</p> */}
          <div className="profile">
            <a href="https://maps.app.goo.gl/UANaWzBP6QQYvMra8" target="_blank">
              <img className="avatar" src={arvanit} alt="profile" />
            </a>
            <p>Arvanit Shahini</p>
          </div>
          <a href="https://maps.app.goo.gl/UANaWzBP6QQYvMra8" target="_blank">
            Read more
          </a>
        </div>

        <div className="review">
          <img className="star" src={star} alt="stars" />
          <p>
            "A paradise for the gamers who wanna give their best on the best
            pc's out there"
          </p>
          <div className="profile">
            <a href="https://www.google.com" target="_blank">
              <img className="avatar" src={ertural} alt="profile" />
            </a>
            <p>Ertural Koliqi</p>
          </div>
          <a href="https://www.google.com" target="_blank">
            Read more
          </a>
        </div>
      </div>

      {/* <div className="reviews secondpartreview">
        <div className="review">
          <img className="star" src={star} alt="stars" />
          <p>"Another level"</p>
          <div className="profile">
            <a href="https://www.google.com" target="_blank">
              <img className="avatar" src={avatar} alt="profile" />
            </a>
            <p>Name Surname</p>
          </div>
          <a href="https://www.google.com" target="_blank">
            Read more
          </a>
        </div>

        <div className="review">
          <img className="star" src={star} alt="stars" />
          <p>"Another level"</p>
          <div className="profile">
            <a href="https://www.google.com" target="_blank">
              <img className="avatar" src={avatar} alt="profile" />
            </a>
            <p>Name Surname</p>
          </div>
          <a href="https://www.google.com" target="_blank">
            Read more
          </a>
        </div>

        <div className="review">
          <img className="star" src={star} alt="stars" />
          <p>"Another level"</p>
          <div className="profile">
            <a href="https://www.google.com" target="_blank">
              <img className="avatar" src={avatar} alt="profile" />
            </a>
            <p>Name Surname</p>
          </div>
          <a href="https://www.google.com" target="_blank">
            Read more
          </a>
        </div>

        <div className="review">
          <img className="star" src={star} alt="stars" />
          <p>"Another level"</p>
          <div className="profile">
            <a href="https://www.google.com" target="_blank">
              <img className="avatar" src={avatar} alt="profile" />
            </a>
            <p>Name Surname</p>
          </div>
          <a href="https://www.google.com" target="_blank">
            Read more
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;
