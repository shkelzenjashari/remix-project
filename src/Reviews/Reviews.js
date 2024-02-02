import React from "react";
import "./reviews.css";
import star from "../images/star-rating.png";
import avatar from "../images/avatar.png";

const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <h1 className="reviews-headline">Reviews</h1>
      <div className="reviews">
        <div className="review">
          <img className="star" src={star} alt="stars" />
          <p>"Another level"</p>
          <div className="profile">
            <a href="https://www.google.com" target="_blank">
              <img className="avatar" src={avatar} alt="profile" />
            </a>
            <p>Name Surname</p>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Reviews;
