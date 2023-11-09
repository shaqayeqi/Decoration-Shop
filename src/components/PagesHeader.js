import React from 'react'
import { NavLink } from 'react-router-dom';
import "../assets/css/pagesHeader.css"

export default function PagesHeader(props) {
    const { img , title}=props
  return (
    <section id="pages-header" className="position-relative bg-black">
      <div
        id="pages-header-bg"
        className="position-absolute top-0 start-0 end-0 bottom-0 opacity-75 overflow-hidden"
      >
        <img src={img} alt="" />
      </div>
      <div className="container-fluid position-relative py-2 py-lg-5">
        <div className="row justify-content-center align-items-center py-5">
          <div className="col-12 col-lg-6 my-2 my-lg-5">
            <h1 className='text-center pt-5'>{title}</h1>

            <nav aria-label="breadcrumb pb-5">
              <ol class="breadcrumb justify-content-center ">
                <li class="breadcrumb-item">
                  <NavLink to="/" className="text-decoration-none 
                  link-light">Home</NavLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
