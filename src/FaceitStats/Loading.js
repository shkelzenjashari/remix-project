import React from "react";
import "./loading.css";

const Loading = ({ res }) => {
  if (res) {
    switch (res.status) {
      case 400:
        return (
          <div className="loading">
            <p>Bad request</p>;
          </div>
        );
      case 401:
        return (
          <div className="loading">
            <p>Unauthorized</p>;
          </div>
        );
      case 403:
        return (
          <div className="loading">
            <p>Forbidden</p>;
          </div>
        );
      case 404:
        return (
          <div className="loading">
            <p>Not Found</p>;
          </div>
        );
      case 429:
        return (
          <div className="loading">
            <p>Too many requests</p>;
          </div>
        );
      case 503:
        return (
          <div className="loading">
            <p>Temporarily unavailable</p>;
          </div>
        );
      default:
        return (
          <div className="loading">
            <p>Loading...</p>;
          </div>
        );
    }
  }
  return <div className="loading"></div>;
};

export default Loading;
