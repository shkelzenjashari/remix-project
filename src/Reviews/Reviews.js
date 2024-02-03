import React from "react";
import "./reviews.css";
import star from "../images/star-rating.png";
import erlind from "../images/erlind.png";
import arlind from "../images/arlind.png";
import arvanit from "../images/arvanit.png";
import ertural from "../images/ertural.jpg";

const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <h1 className="reviews-headline">Vleresimet</h1>
      <div className="reviews">
        <div className="review">
          <img className="star" src={star} alt="stars" />
          <p>"🔥…"</p>
          <div className="profile">
            <a
              href="https://maps.app.goo.gl/MbaCtnkMGxqQaMqZ9"
              target="_blank"
              rel="noreferrer"
            >
              <img className="avatar" src={arlind} alt="profile" />
            </a>
            <p>Arlind Dubova</p>
          </div>
          <a
            href="https://www.google.com/maps/place/Remix+Gaming+Center/@42.6689557,21.1570684,17z/data=!4m8!3m7!1s0x13549f214c9cabb1:0xb223c9c6e50d4cea!8m2!3d42.6689518!4d21.1596433!9m1!1b1!16s%2Fg%2F11j4xf9qfr?hl=en&entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            Lexo me shume
          </a>
        </div>

        <div className="review">
          <img className="star" src={star} alt="stars" />
          {/* <p>"🌟🌟🌟🌟🌟"</p> */}
          <div className="profile">
            <a
              href="https://maps.app.goo.gl/UANaWzBP6QQYvMra8"
              target="_blank"
              rel="noreferrer"
            >
              <img className="avatar" src={arvanit} alt="profile" />
            </a>
            <p>Arvanit Shahini</p>
          </div>
          <a
            href="https://www.google.com/maps/place/Remix+Gaming+Center/@42.6689557,21.1570684,17z/data=!4m8!3m7!1s0x13549f214c9cabb1:0xb223c9c6e50d4cea!8m2!3d42.6689518!4d21.1596433!9m1!1b1!16s%2Fg%2F11j4xf9qfr?hl=en&entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            Lexo me shume
          </a>
        </div>

        <div className="review">
          <img className="star" src={star} alt="stars" />
          <p>"Another level"</p>
          <div className="profile">
            <a
              href="https://maps.app.goo.gl/VTxqnbtfoe34M5zQ8"
              target="_blank"
              rel="noreferrer"
            >
              <img className="avatar" src={erlind} alt="profile" />
            </a>
            <p>Erlind Behrami</p>
          </div>
          <a
            href="https://www.google.com/maps/place/Remix+Gaming+Center/@42.6689557,21.1570684,17z/data=!4m8!3m7!1s0x13549f214c9cabb1:0xb223c9c6e50d4cea!8m2!3d42.6689518!4d21.1596433!9m1!1b1!16s%2Fg%2F11j4xf9qfr?hl=en&entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            Lexo me shume
          </a>
        </div>

        <div className="review">
          <img className="star" src={star} alt="stars" />
          <p>
            "A paradise for the gamers who wanna give their best on the best
            pc's out there"
          </p>
          <div className="profile">
            <a
              href="https://www.google.com/maps/contrib/117358933344336878878/reviews/@42.6689518,21.1596433,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en&entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <img className="avatar" src={ertural} alt="profile" />
            </a>
            <p>Ertural Koliqi</p>
          </div>
          <a
            href="https://www.google.com/maps/place/Remix+Gaming+Center/@42.6689557,21.1570684,17z/data=!4m8!3m7!1s0x13549f214c9cabb1:0xb223c9c6e50d4cea!8m2!3d42.6689518!4d21.1596433!9m1!1b1!16s%2Fg%2F11j4xf9qfr?hl=en&entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            Lexo me shume
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
            Lexo me shume
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
            Lexo me shume
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
            Lexo me shume
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
            Lexo me shume
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;
