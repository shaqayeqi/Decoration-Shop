import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import $ from "jquery";
import { useAuth0 } from "@auth0/auth0-react";
import { useShoppingContext } from "../context/shopping-context";

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const { cart, removeFromCart } = useShoppingContext();
  useEffect(() => {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass(
        "scrolled sticky-top ",
        $(this).scrollTop() > $nav.height()
      );
    });
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top p-0 mt-3">
        <div className="container bg-white justify-content-lg-between justify-content-start">
          <NavLink className="navbar-brand  me-auto" to="/">
            <img
              src={logo}
              alt="logo"
              className="d-inline-block align-text-top"
            />
          </NavLink>

          <div
            className="collapse navbar-collapse flex-grow-0 mx-auto"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="aboutus">
                  ABOUTUS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="portfolio"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="contactus"
                >
                  CONTACTUS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="shop">
                  SHOP
                </NavLink>
              </li>
              {!isAuthenticated && (
                <li className="nav-item">
                  <span
                    className="nav-link"
                    role="button"
                    onClick={loginWithRedirect}
                  >
                    Login
                  </span>
                </li>
              )}
              {isAuthenticated && (
                <li className="nav-item">
                  <span
                    className="nav-link"
                    role="button"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    LogOut
                  </span>
                </li>
              )}
            </ul>
          </div>
          <div>{isAuthenticated && `Hi , ${user.given_name} `}</div>

          {!isAuthenticated && (
            <div className="d-lg-none">
              <button
                onClick={loginWithRedirect}
                type="button"
                className="btn btn-link link-dark fs-4"
              >
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />
              </button>
            </div>
          )}

          <div className="dropdown ">
            <button
              className="btn fs-4 btn-link link-dark position-relative"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="false"
            >
              <FontAwesomeIcon icon="fa-solid fa-bag-shopping " />
              <span class="position-absolute top-0 end-0 badge rounded-pill bg-danger ">
                {cart.length > 0 && cart.length}
              </span>
            </button>
            <div className="dropdown-menu dropdown-menu-end border-0 text-body-secondary shadow-lg rounded-0 p-0 " >
              {cart.length === 0 && (
                <span className="d-block fs-5 fw-bold text-center p-3 text-danger">
                  Cart is Empty!
                </span>
              )}
              {cart.length > 0 && (
                <div className="vstack">
                  <div className="border-bottom fs-4 p-3">
                    <span className="d-block">
                      In Cart :{" "}
                      <span className="text-danger fw-semibold">
                        {cart.length}
                      </span>{" "}
                      Produts
                    </span>
                    <span className="d-block"> TOTAL PRICE: $524</span>
                  </div>

                  {cart.map((item) => (
                    <>
                      <div className="hstack p-lg-0 p-2">
                        <div className="w-25 d-none d-lg-block">
                          <img
                            src={item.image}
                            alt=""
                            className="img-thumbnail rounded-circle "
                          />
                        </div>
                        <div className="me-3 ms-lg-2 fw-semibold fs-5 ">
                          {item.name}
                        </div>
                        <div className="fw-semibold fs-5 m-lg-auto">
                          ${item.price}
                        </div>
                        
                          <button
                            className="btn"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
                          </button>
                        
                      </div>
                    </>
                  ))}
                  <NavLink
                    className="btn btn-danger fw-bold fs-5 rounded-0 "
                    to="shoppingcart"
                  >
                    Go to Cart
                  </NavLink>
                </div>
              )}
            </div>
          </div>

          {/* modal search icon */}
          <button
            type="button"
            className="btn btn-link link-dark fs-4"
            data-bs-toggle="modal"
            data-bs-target="#search"
          >
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>

          {/* offconvas icon */}
          <div className="d-lg-none">
            <button
              className="btn fs-4 btn-link link-dark "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
          </div>
        </div>
      </nav>
      {/* offconvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <div className="list-group list-group-flush">
              <NavLink
                className="list-group-item list-group-item-action"
                to="/"
                aria-current="page"
              >
                Home
              </NavLink>
              <NavLink
                className="list-group-item list-group-item-action"
                to="blog"
                aria-current="page"
              >
                Blog
              </NavLink>
              <NavLink
                className="list-group-item list-group-item-action"
                to="contactus"
                aria-current="page"
              >
                Contact us
              </NavLink>
              <NavLink
                className="list-group-item list-group-item-action"
                to="shop"
                aria-current="page"
              >
                Shop
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}

      <div
        className="modal fade "
        id="search"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content ">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <div className="container ">
                <div className="row align-items-center justify-content-center vh-100">
                  <div className="col-10">
                    <div className="input-group  border-buttom">
                      <input
                        type="text"
                        className="form-control form-control-lg border-0 border-bottom rounded-0 bg-transparent text-white "
                        placeholder="search..."
                        aria-label="search..."
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn btn-outline-secondary  border-0 border-bottom rounded-0 "
                        type="button"
                        id="button-addon2"
                      >
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass fs-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
