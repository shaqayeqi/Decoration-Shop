import React from 'react'
import { NavLink } from 'react-router-dom';


export default function HomeSliderSlide(props) {
    const  {slideImg,
          slideHeaderLine1,
          slideHeaderLine2,
          slideText,
          slideLinkText,
          slideLinkUrl}=props
  return (
    <>
      <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-start align-items-center">
        <div className="container">
          <div className="row flex-column align-items-center align-items-lg-start">
            <div className="col-9 col-lg-6 col-xl-5 ms-lg-3">
              <h2>
                <span className="d-block">{slideHeaderLine1}</span>
                <span className="d-block">{slideHeaderLine2}</span>
              </h2>
              <p>{slideText}</p>
              <div className="slide-link">
                <NavLink
                  to={slideLinkUrl}
                  className="btn btn-outline-secondary rounded-0"
                >
                  {slideLinkText}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={slideImg}
        alt=""
        className="img-fluid object-fit-cover min-vh-100"
      />
    </>
  );
}
