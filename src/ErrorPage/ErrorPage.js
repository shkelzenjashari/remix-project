import React from "react";
import { useNavigate } from "react-router-dom";
import "./errorPage.css";

const ErrorPage = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="errorPage">
      <div className="items">
        <h1>Error 404: Page not found</h1>
        <button onClick={handleClick}>Kthehu ne homepage</button>
      </div>
    </div>
  );
};

export default ErrorPage;
