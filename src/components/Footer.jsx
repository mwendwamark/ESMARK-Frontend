import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-router-dom";
import Facebook from "../assets/Facebook.svg";
import Twitter from "../assets/Twitter.svg";
import Instagram from "../assets/Instagram.svg";
import Github from "../assets/Github.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer-container container">
        <hr />
        <div className="footer-links-container">
          <div className="footer-links-logo-wrapper">
            <NavLink to="/" className="nav-logo active-link">
              <i className="bx bxs-objects-horizontal-center bx-rotate-90"></i>{" "}
              <span></span>
              Esmark
            </NavLink>
            <div className="footer-link-pages">
              <h4 className="footer-pages-header">Pages</h4>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/houses">Houses</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contacts">contacts</NavLink>
              <NavLink to="/login">Log In</NavLink>
            </div>
          </div>

          <div className="footer-contact-us">
            <h4 className="footer-contact-header">Address</h4>

            <div className="footer-contact-address-wrapper">
              <p className="footer-contact-address">Esmark Apartment</p>
              <p className="footer-contact-address">Clay City</p>
              <p className="footer-contact-address">Nairobi, Kenya</p>
              <p className="footer-contact-address">+254 717 084 324</p>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-contact-header">Newsletter</h4>
            <p className="footer-newsletter-desc">
              Subscribe to our newsletter to get exciting offers
            </p>
            <div className="footer-newsletter-email-wrapper">
              <input
                type="text"
                placeholder="Enter your email"
                className="footer-newsletter-email"
              />
              <button className="footer-newsletter-email-submit">Submit</button>
            </div>
          </div>
        </div>

        <div className="footer-copyright-social-links">
          <div className="footer-copyright">
            Copyright © Esmark {new Date().getFullYear()} LLC. All rights
            reserved. Made with love &#9829;
          </div>

          <div className="footer-social-links">
            <NavLink
              to="https://www.facebook.com"
              className="footer-social-link"
            >
              <img src={Facebook} alt="facebook-alt" />
            </NavLink>
            <NavLink to="https://twitter.com" className="footer-social-link">
              <img src={Twitter} alt="twitter-alt" />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/"
              className="footer-social-link"
            >
              <img src={Instagram} alt="instagram-alt" />
            </NavLink>
            <NavLink
              to="https://github.com/mwendwamark?tab=repositories"
              className="footer-social-link"
            >
              <img src={Github} alt="github-alt" />
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
