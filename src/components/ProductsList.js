import React from "react";
import { useFilterContext } from "../context/filter_Context";
import "../assets/css/ProductBox.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useShoppingContext } from "../context/shopping-context";
export default function ProductsList() {
  const { filtered_products } = useFilterContext();
  const { addToCart } = useShoppingContext();
  return (
    <>
      <div className="row">
        <div className="col-12 small">{filtered_products.length} Products</div>
      </div>
      <div className="row row-cols-2 row-cols-lg-3 g-3">
        {filtered_products.map((product) => (
          <div className="col" key={filtered_products.id}>
            <div className="vstack border ProductBox position-relative h-100">
              <div className="overflow-hidden ">
                {product.isNew && (
                  <div className="position-absolute end-0 top-0 mt-3 z-3 ProductBoxNewLabel fs-5 pe-1 ps-2 fw-semibold">
                    New
                  </div>
                )}

                <img
                  src={product.image}
                  alt=""
                  className=" h-100 w-100 object-fit-cover"
                />
              </div>
              <div className="p-4  fs-4  ">
                <NavLink to={`/products/${product.id}`}>{product.name}</NavLink>
                <hr />${product.price}
              </div>
              <div className="position-absolute end-0 bottom-0 m-3  ">
                <button className="btn p-0" onClick={() => addToCart(product)}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-cart-plus "
                    className="fa-xl"
                  />
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
          </div>
        ))}
      </div>
    </>
  );
}
