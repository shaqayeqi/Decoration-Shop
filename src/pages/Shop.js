import React from 'react'
import PagesHeader from '../components/PagesHeader'
import img1 from "../assets/images/project-12-1200x800.jpg"
import ProductsList from '../components/ProductsList';
import Filters from '../components/Filters';
import Sort from '../components/Sort';

export default function Shop() {
  return (
    <>
      <PagesHeader img={img1} title="shop" />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-lg-3">
         <Filters/>
          </div>
          <div className="col-12 col-lg-9">
            <Sort/>
            <hr />
            <ProductsList/>
          </div>
        </div>
      </div>
    </>
  );
}
