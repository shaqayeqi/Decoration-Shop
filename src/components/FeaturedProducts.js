import React from "react";
import HomeCatBox from "../components/HomeCatBox";
import { useProdutsContext } from "../context/ProductsContext";
import Loading from "./Loading";
import Alert from "./Alert";
import { NavLink } from "react-router-dom";

export default function FeaturedProducts() {
  const { featured_products, produts_loading, produts_error } =
    useProdutsContext();

  if (produts_loading ) return <Loading />;

  if (produts_error ) 
    return (
      <>
        <Alert alertstyle={"danger"}>Error Fetching Product Data</Alert>;
      </>
    );
  
  return (
    <section className="what-we-offer">
      <div className="container pt-2">
        <div className="row my-5">
          <div className="col-12 d-flex align-items-center">
            <hr className="flex-grow-1" />
            <div className="mx-2 fw-bold">Featured Products</div>
            <hr className="flex-grow-1" />
          </div>
        </div>
        <div className="row g-4">
          {featured_products.map((product) => (
            <div
              className="col-md-6 col-12 col-lg-3"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-offset="200"
              key={product.id}
            >
              <HomeCatBox
                img={product.image}
                title={product.name}
                isnew={product.isNew}
                isoff={product.isOff}
                url={`products/${product.id}`}
              />
            </div>
          ))}
          <div className="container">
            <div className="row my-4">
              <div className="col-12 d-flex justify-content-center">
                <NavLink
                  className="btn btn-outline-secondary rounded-0"
                  to="shop"
                >
                  Veiw all
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
