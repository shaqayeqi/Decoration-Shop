import React from "react";
import { useShoppingContext } from "../context/shopping-context";
import PagesHeader from "../components/PagesHeader";
import image1 from "../assets/images/project-5-1200x800.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


export default function ShoppingCart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    cart,
    removeFromCart,
    removeAllFromCart,
    qtyInIncreament,
    qtyDecreament,
    totalAmount,
    totalItem
  } = useShoppingContext();

  return (
    <>
      <PagesHeader img={image1} title="Shopping Cart" />
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-end">
            <div>
              <NavLink to="/shop" className="btn btn-outline-danger">
                Continue Shopping
              </NavLink>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <div class="table-responsive">
              <table class="table caption-top ">
                <caption className="fw-bold fs-4 my-2">
                  Shopping Cart
                  <br />
                  <span className="fs-6 ">
                    You have{" "}
                    <span className="text-danger text-decoration-underline">
                      {totalItem}
                    </span>{" "}
                    items in Shopping Cart
                  </span>
                </caption>

                <tbody>
                  {cart.map((item) => (
                    <tr>
                      <td className="w-25 h-25 p-0">
                        <img
                          src={item.image}
                          alt=""
                          className="img-thumbnail  img-fluid"
                        />
                      </td>
                      <td className="text-center align-middle fw-bold fs-5 p-0">
                        {item.name}
                      </td>
                      <td
                        className="text-center align-middle p-0 "
                        style={{ width: "7rem" }}
                      >
                        <div className="input-group  input-group-sm ">
                          <button
                            className={`${
                              item.qty === 1
                                ? "btn btn-outline-danger disabled"
                                : "btn btn-outline-danger"
                            }`}
                            type="button"
                            onClick={() => qtyDecreament(item.id)}
                          >
                            <FontAwesomeIcon icon="fa-solid fa-minus" />
                          </button>
                          <input
                            type="text"
                            className="form-control p-0 text-center "
                            placeholder={item.qty}
                          />
                          <button
                            className="btn btn-outline-success"
                            type="button"
                            onClick={() => qtyInIncreament(item.id)}
                          >
                            <FontAwesomeIcon icon="fa-solid fa-plus" />
                          </button>
                        </div>
                      </td>
                      <td className="text-center align-middle fw-bold fs-5 p-0">
                        {item.qty === 1 && <span>${item.price}</span>}
                        {item.qty > 1 && <span>${item.price * item.qty}</span>}
                      </td>
                      <td className="text-center align-middle fw-bold fs-5 p-0">
                        <button
                          className="btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FontAwesomeIcon
                            icon="fa-solid fa-trash-can"
                            style={{ color: "red" }}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-end">
            Cart Total : $ {totalAmount}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-danger" onClick={removeAllFromCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
