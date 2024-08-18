// Import necessary components and libraries
import React from "react";
import img from "../images/about2.png";
import Navbar1 from "./Navbar";
// import "../styles/about.css"; // Import your CSS file for styling (if applicable)

const AboutPage = () => {
  return (
    <>
      <Navbar1 />
      <div className="about-page mb-5">
        <div className="container-wrapper">
          <div
            className="container card"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="text-center">
                  <h1>Party Hall App</h1>
                  <p className="lead fs-3 text-danger mt-3">
                    Enjoy jour Party with Us
                  </p>
                </div>
                <hr />
                <div>
                  <h2 className="text-primary">Our Mission</h2>
                  <p className="fs-6">
                    Empowering memorable celebrations by offering versatile,
                    impeccably designed venues. We strive to exceed expectations
                    with exceptional service and seamless event coordination,
                    ensuring every occasion is unforgettable.
                  </p>
                </div>
                <hr />
                <div>
                  <h2 className="text-primary">Why Choose Us?</h2>
                  <ul>
                    <li className="fs-5">
                      <span className="fs-5 text-info">
                        Wide Selection of Venues:
                      </span>{" "}
                      Access to a diverse range of party halls tailored to
                      different preferences and event sizes, ensuring there's a
                      perfect venue for every occasion.{" "}
                    </li>
                    <li className="fs-5">
                      <span className="fs-5 text-info">Ease of Booking</span>{" "}
                      Streamlined booking process with user-friendly interfaces
                      and transparent pricing, making it convenient to reserve
                      and manage event spaces.
                    </li>
                    <li className="fs-5">
                      <span className="fs-5 text-primary">
                        Comprehensive services
                      </span>{" "}
                      From catering options to event planning assistance, the
                      app provides comprehensive services to facilitate seamless
                      and stress-free event organization.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
