import React from "react";
import "../assets/css/ProductBox.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductBox(props) {
 
  const { image, price, name, isNew, id } = props;

  return (
    <>
      <div className="vstack border ProductBox position-relative h-100">
        <div className="overflow-hidden ">
          {isNew && (
            <div className="position-absolute end-0 top-0 mt-3 z-3 ProductBoxNewLabel fs-5 pe-1 ps-2 fw-semibold">
              New
            </div>
          )}

          <img src={image} alt="" className=" h-100 w-100 object-fit-cover" />
        </div>
        <div className="p-4  fs-4  ">
          <NavLink to={`/products/${id}`} >
            {name}
          </NavLink>
          <hr />${price}
        </div>
        <div className="position-absolute end-0 bottom-0 m-3  ">
          <button className="btn p-0">
            <FontAwesomeIcon icon="fa-solid fa-cart-plus " className="fa-xl" />
          </button>
        </div>
        {/* <div className="position-absolute end-0 bottom-0 m-3  ">
          <button className="btn p-0">
            <FontAwesomeIcon
              icon="fa-solid fa-rectangle-xmark"
              className="fa-xl"
            />
          </button>
        </div> */}
      </div>
    </>
  );
}
