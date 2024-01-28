import React from "react";
import noPage from "../assets/404.svg"
import { NavLink } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="container">
    <div className="not_found_header">
      <h1>404</h1>
      <h3>Page Not Found</h3>
    </div>
    <img src={noPage} alt="not_found_image" />
    <div className="not_found_foooter">
      <p>We're sorry the page you requested could not be found. Please go back</p>
      <NavLink to="/">HOME</NavLink>
    </div>
    </div>
  );
};

export default NoPage;
