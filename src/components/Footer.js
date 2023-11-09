import React from 'react'
import "../assets/css/footer.css"
import logoinvers from "../assets/images/logo-inverse.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterLightBox from './FooterLightBox';
import NewsLetter from './NewsLetter';

export default function Footer() {
  return (
    <footer className="footer mt-5" id="MainFooter">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row py-5 my-2 justify-content-between">
                <div
                  className="col-12 col-md-3 text-center text-md-start"
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-offset="50"
                >
                  <img src={logoinvers} alt="" />
                  <p className="py-3">
                    We are an industry-leading flooring products and services
                    provider. Let’s make your floor look spectacular!
                  </p>
                  <div>
                    <hr className="d-none d-md-block" />
                  </div>
                  <div className="d-flex align-items-center ">
                    <FontAwesomeIcon icon="fa-solid fa-phone" />
                    <div className="ms-2">
                      <a
                        href="tel:+1323-913-4688"
                        className="link-light text-decoration-none"
                      >
                        +1323-913-4688
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center ">
                    <FontAwesomeIcon icon="fa-solid fa-clock" />
                    <div className="ms-2">Mon-Sat: 07:00AM - 05:00PM</div>
                  </div>
                  <div className="d-flex align-items-center  mb-2">
                    <FontAwesomeIcon icon="fa-solid fa-location-arrow" />
                    <div className="ms-2">
                      4730 Crystal Springs Dr, Los Angeles, CA 90027
                    </div>
                  </div>
                </div>

                <hr className=" d-md-none my-5" />

                <div
                  className="col-12 col-md-4 text-center text-md-start"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-offset="50"
                >
                  <h3>NEWSLETTER</h3>
                  <div>
                    <p>Join our email list for tips and useful information.</p>
                  </div>
                  <NewsLetter/>
                  <div className="row py-4 justify-content-md-start justify-content-center">
                    <div className="col-auto align-items-center d-flex">
                      Follow Us
                    </div>
                    <div className="col-auto">
                      <a
                        href="#"
                        className="link-custom-1 rounded-circle p-2 link-square-small link-square"
                      >
                        <FontAwesomeIcon icon="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="col-auto">
                      <a
                        href="#"
                        className="link-custom-1 rounded-circle p-2 link-square-small link-square"
                      >
                        <FontAwesomeIcon icon="fab fa-twitter" />
                      </a>
                    </div>
                    <div className="col-auto">
                      <a
                        href="#"
                        className="link-custom-1 rounded-circle p-2 link-square-small link-square"
                      >
                        <FontAwesomeIcon icon="fab fa-google-plus-g" />
                      </a>
                    </div>
                    <div className="col-auto">
                      <a
                        href="#"
                        className="link-custom-1 rounded-circle p-2 link-square-small link-square"
                      >
                        <FontAwesomeIcon icon="fab fa-facebook-f" />
                      </a>
                    </div>
                  </div>
                  <hr className=" d-md-none my-5" />
                </div>
                <div
                  className="col-12 col-md-3 text-center"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-offset="50"
                >
                  <h3>GALLERY</h3>
                  <FooterLightBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row py-4">
                <div className="col-6">
                  © 2023 Parquetry. All rights reserved.
                </div>
                <div className="col-6 text-end">Privacy Policy.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
