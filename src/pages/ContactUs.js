import React from "react";
import PagesHeader from "../components/PagesHeader";
import img3 from "../assets/images/project-4-1200x800.jpg";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import marker from "../assets/images/marker-icon.png";
import shadowMarker from "../assets/images/marker-shadow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/contactus.css";
import { useForm } from "react-hook-form";
import usePostAPI from "../Hooks/usePostAPI";
import Loading from "../components/Loading";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function ContactUs() {

const {data,loading,error,postData}=usePostAPI()

  const pinIcon = L.icon({
    iconUrl: marker,
    shadowUrl: shadowMarker,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit=(formdata)=>{
    postData("https://stackedreceipt.backendless.app/api/data/contactus",formdata);
  }

  useEffect(()=>{
    data &&
      toast.success("Done !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  } ,[data])

  useEffect(()=>{
    toast.error(errors.errorMsg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  },[error])
  

  return (
    <>
    {loading && <Loading/>}
    <ToastContainer/>
      <PagesHeader img={img3} title="Contact Us" />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 mt-3">
          <div className="col mb-3">
            <div className="contactus-boxes">
              <FontAwesomeIcon
                icon="fa-solid fa-mobile-screen-button"
                size="4x"
                color="#976f55"
              />
              <hr />
              <a href="tel:+13239134688">+1 323-913-4688 </a>
              <a href="tel:+13238884554">+1 323-888-4554</a>
            </div>
          </div>
          <div className="col mb-3">
            <div className="contactus-boxes">
              <FontAwesomeIcon
                icon="fa-solid fa-house"
                size="4x"
                color="#976f55"
              />
              <hr />
              <p>4730 Crystal Springs Dr, Los Angeles, CA 90027</p>
            </div>
          </div>
          <div className="col mb-3">
            <div className="contactus-boxes">
              <FontAwesomeIcon
                icon="fa-solid fa-comments"
                size="4x"
                color="#976f55"
              />
              <hr />
              <a href="mailto:mail@demolink.org">mail@demolink.org </a>
              <a href="info@demolink.org">info@demolink.org</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 ">
            <MapContainer
              center={[35.681561731721395, 51.397562026977546]}
              zoom={15}
              scrollWheelZoom={false}
              style={{ height: "25rem" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={[35.681561731721395, 51.397562026977546]}
                icon={pinIcon}
              >
                <Popup>4730 Crystal Springs Dr, Los Angeles, CA 90027</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-md-row align-items-center flex-column ">
              <h2 className="m-0">GET IN TOUCH</h2>
              <div className="vr mx-4 my-3 d-none d-md-block"></div>
              <p className="text-center text-md-start fs-5 m-0">
                If you have any questions, just fill in the contact form, and we
                will answer you shortly.
              </p>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-12">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="row g-3"
              noValidate
            >
              <div className="col-md-4 position-relative">
                <div className="form-floating ">
                  <input
                    name="fullname"
                    className="form-control rounded-0 bg-light"
                    id="fullname"
                    type="text"
                    placeholder="FULL NAME"
                    {...register("fullname", {
                      required: "fullName is required",
                      maxLength: 20,
                    })}
                  />
                  <label for="floatingInput">FULL NAME</label>
                </div>

                {errors.fullname && (
                  <p role="alert">{errors.fullname?.message}</p>
                )}
              </div>
              <div className="col-md-4 position-relative">
                <div className="form-floating">
                  <input
                    id="subject"
                    name="subject"
                    className="form-control rounded-0"
                    type="text"
                    placeholder="subject"
                    {...register("subject", {
                      required: "subject is required",
                      maxLength: 20,
                    })}
                  />
                  <label for="floatingInput">SUBJECT</label>
                </div>
                {errors.subject && <p role="alert">{errors.subject?.message}</p>}
              </div>
              <div className="col-md-4 position-relative">
                <div className="form-floating">
                  <input
                    name="email"
                    id="email"
                    className="form-control rounded-0"
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: "email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                  />
                  <label for="floatingInput">Email</label>
                </div>
                {errors.email && <p role="alert">{errors.email?.message}</p>}
              </div>
              <div className="col-12 position-relative">
                <div className="form-floating">
                  <textarea
                    className="form-control rounded-0"
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="MESSAGE"
                    {...register("message", {
                      required: "message address is required",
                    })}
                  ></textarea>
                  <label for="floatingInput">MESSAGE</label>
                </div>
                {errors.message && <p role="alert">{errors.message?.message}</p>}
              </div>
              <div className="col-12">
                <button className="btn  border rounded-0 btn-lg" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
