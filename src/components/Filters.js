import React from "react";
import { useFilterContext } from "../context/filter_Context";
import { getUniqueValues } from "../Utils/helpers";
import "../assets/css/Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Filters() {
  const {
    filters: { text, company, category, shipping },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

 

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");


  return (
    <>
      <button
        className="btn btn-primary d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#filterOffcanvas"
        aria-controls="filterOffcanvas"
      >
        <FontAwesomeIcon icon="fa-solid fa-filter" />
      </button>

      <div
        className="offcanvas-lg offcanvas-start"
        tabIndex="-1"
        id="filterOffcanvas"
        aria-labelledby="filterOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="filterOffcanvasLabel">
            Filters
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#filterOffcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="card">
            <div className="card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row g-3">
                  <div className="col">
                    <label htmlFor="text" className="form-label">
                      Product Name
                    </label>

                    <input
                      type="text"
                      name="text"
                      className="form-control"
                      value={text}
                      placeholder="Search"
                      aria-label="Search"
                      onChange={updateFilters}
                    />
                  </div>
                </div>

                <div className="row g-3 mt-4">
                  <div className="col">
                    <h5>Category</h5>
                    <div
                      className="btn-group-vertical"
                      role="group"
                      aria-label="Vertical button group"
                    >
                      {categories.map((cat, i) => (
                        <button
                          key={i}
                          className={`btn btn-link text-decoration-none w-100 text-start ${
                            cat === category ? "active" : "null"
                          }`}
                          onClick={updateFilters}
                          name="category"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="row g-3 mt-4">
                  <div className="col">
                    <h5>Companies</h5>
                    <div
                      className="btn-group-vertical"
                      role="group"
                      aria-label="Vertical button group"
                    >
                      {companies.map((com, i) => (
                        <button
                          key={i}
                          className={`btn btn-link text-decoration-none w-100 text-start ${
                            com === company ? "active" : "null"
                          }`}
                          onClick={updateFilters}
                          name="company"
                        >
                          {com}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="row g-3 mt-4">
                  <div className="col">
                    <h5>Shipping</h5>

                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="shipping"
                        name="shipping"
                        onChange={updateFilters}
                        checked={shipping}
                      />
                      <label
                        class="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Free Shipping
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row g-3 mt-4">
                  <div className="col">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={clearFilters}
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
