import React from "react";
import { useProdutsContext } from "../context/ProductsContext";
import PagesHeader from "../components/PagesHeader";
import img1 from "../assets/images/project-12-1200x800.jpg";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../components/Loading";
import Alert from "../components/Alert";

export default function Product() {
  const { id } = useParams();
  const {
    singel_product_loading,
    single_product_error,
    single_product,
    fetchSingelProduct,
  } = useProdutsContext();

  useEffect(() => {
    fetchSingelProduct(
      `https://6527afd3931d71583df1318d.mockapi.io/produts/${id}`
    );
  }, [id]);

  

  return (
    <>
      <PagesHeader img={img1} title="Product" />

      {singel_product_loading && <Loading />}
      {single_product_error && (
        <Alert alertstyle={"danger"}>Error Fetching Product Data</Alert>
      )}
      {!single_product_error && (
        <div className="container my-5">
          <div className="row my-3">
            <div className="col-12">
              <NavLink to="/shop" className="btn btn-outline-secondary">
                Back to Shop
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card mb-3" style={{ maxwidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={single_product.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{single_product.name}</h5>
                      <p className="card-text">{single_product.description}</p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          {single_product.price}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
