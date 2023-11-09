import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/homeCatBox.css";

export default function HomeCatBox(props) {
  const { img, title, isnew, url } = props;
  return (
    <>
      <div className="vstack position-relative border HomeCatBox">
        <div className="overflow-hidden">
          {isnew && (
            <div className="position-absolute end-0 top-0 mt-2 HomeCatBoxNewLable ps-2 pe-1 fs-5 fw-semibold  z-3">
              New
            </div>
          )}

          <img src={img} alt="" className="img-fluid " />
        </div>
        <div className="d-flex justify-content-between align-items-center p-4">
          <NavLink to={url} className=" stretched-link fs-2">
            {title}
          </NavLink>
          <hr className="ms-auto me-1" />
          <FontAwesomeIcon icon="fa-solid fa-caret-right fs-4" />
        </div>
      </div>
    </>
  );
}
