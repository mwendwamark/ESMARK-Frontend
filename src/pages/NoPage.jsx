import React from "react";
import noPage from "../assets/404.svg";
import { NavLink } from "react-router-dom";
import "../styles/NoPage.css";

const NoPage = () => {
  return (
    <>
      <div className="not_found_page_body container">
        <div className="not_found_header">
          <h1>Error: 404</h1>
          <h3>Page Not Found!</h3>
        </div>
        <div className="image_404_content">
          <img src={noPage} alt="not_found_image" />{" "}
        </div>
        <div className="not_found_footer">
          <p>
            We're sorry the page you requested could not be found. Please go
            back
          </p><br />
          <NavLink to="/">HOME</NavLink>
        </div>
      </div>
    </>
  );
};

export default NoPage;
