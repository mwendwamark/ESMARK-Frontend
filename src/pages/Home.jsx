import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import "../styles/Home.css";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [refIntroduction, inViewIntroduction] = useInView({
    triggerOnce: true,
  });

  const [refLandlord, inViewLandlord] = useInView({
    triggerOnce: true,
  });

  const [refTenant, inViewTenant] = useInView({
    triggerOnce: true,
  });

  const [introductionVisible, setIntroductionVisible] = useState(false);
  const [landlordVisible, setLandlordVisible] = useState(false);
  const [tenantVisible, setTenantVisible] = useState(false);

  useEffect(() => {
    if (inViewIntroduction) {
      setIntroductionVisible(true);
    }
  }, [inViewIntroduction]);

  useEffect(() => {
    if (inViewLandlord) {
      setLandlordVisible(true);
    }
  }, [inViewLandlord]);

  useEffect(() => {
    if (inViewTenant) {
      setTenantVisible(true);
    }
  }, [inViewTenant]);

  return (
    <>
      <section className="home_content section">
        <div className="home_container container">
          <div className="home_contents">
            <div
              className={`home-contents-introduction ${
                introductionVisible ? "fade-in" : ""
              }`}
              ref={refIntroduction}
            >
              <h1 className="home-introduction animate__animated animate__slideInDown">
                <b>Esmark</b> - Elevating your rental experience!
              </h1>

              <div className="apartment_image_contents">
                <p className="welcome-message">
                  <span className="welcome-title">
                    ✨Discover Your Ideal Rental Experience with Esmark!
                  </span>
                  <br />
                  Welcome to Esmark – where simplicity meets sophistication in
                  rental management. Whether you're a landlord seeking seamless
                  property control or a tenant in pursuit of the perfect living
                  space, Esmark is your go-to for exceptional apartments.
                  <br />
                  <br />
                  <br />
                  <span className="general-getstarted">
                    <NavLink to="/login" className="general-getstarted">
                      Get started{" "}
                      <i
                        className="bx bx-right-arrow-alt"
                        style={{ backgroundColor: "#443fde", fontWeight: 700 }}
                      ></i>
                    </NavLink>
                  </span>
                </p>
                <img
                  src="https://img.freepik.com/free-vector/condominium-abstract-concept-vector-illustration-private-residence-building-complex-condominium-management-landlord-owned-household-multistorey-house-appartment-abstract-metaphor_335657-4252.jpg?size=626&ext=jpg"
                  alt="/apartment-vector"
                  className={`home_img ${introductionVisible ? "fade-in" : ""}`}
                />
              </div>
            </div>
            <div
              className={`landlord_management_section ${
                landlordVisible ? "fade-in" : ""
              }`}
              ref={refLandlord}
            >
              <h3>Efficient Management of our apartment rooms.</h3>
              <div className="landlord_management_section_contents">
                <img
                  src="https://i.ibb.co/gwVqrRL/Screenshot-from-2024-02-02-12-42-12.png"
                  alt="landlord-image"
                  className="landlord"
                />
                <p>
                  The Landlord benefits from Esmark's streamlined property
                  management. Easily oversee your properties, conduct tenant
                  screenings, and manage leases hassle-free. Spend less time on
                  paperwork and more time ensuring your properties thrive.
                </p>
              </div>
            </div>
            <div
              className={`tenant_management_section ${
                tenantVisible ? "fade-in" : ""
              }`}
              ref={refTenant}
            >
              <h3>Explore Available Houses for Lease!</h3>{" "}
              <div className="tenants-contents-section">
                <img
                  src="https://media.istockphoto.com/id/1335050734/photo/businessman-using-a-computer-for-property-sales-listings-real-estate-agent-agency-contractor.jpg?s=612x612&w=0&k=20&c=-QsLOTTjONcvkhAJQWjsXHjeRXnInmclCZIjRt3wE20="
                  alt="search-image"
                />
                <p>
                  <b>Searching for your perfect home?</b>
                  <br /> Esmark provides an array of available houses for lease.
                  Our user-friendly interface allows you to explore options,
                  submit online applications, and experience secure payment
                  processing. <br />{" "}
                  <i> Your ideal rental is just a click away.</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Home;
