import React from 'react'
import usePostAPI from '../Hooks/usePostAPI';
import Loading from './Loading';
import { ToastContainer ,toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';


export default function NewsLetter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const {loading,data,error,postData}=usePostAPI()

const onSubmit=(formdata)=>{
    postData("https://stackedreceipt.backendless.app/api/data/NewsLetter",formdata);
}

useEffect(() => {
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
}, [data]);

useEffect(() => {
  toast.error(error.errorMsg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}, [error]);

  return (
    <>
      {loading && <Loading />}
      <ToastContainer />
      <form className="row g-3" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="col-12 position-relative">
          <div className="form-floating mb-3">
            <input
              name="email"
              id="email"
              type="email"
              className="form-control rounded-0 bg-light"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              placeholder="EMAIL"
              aria-invalid={errors.mail ? "true" : "false"}
            />
            
          </div>
          {errors.email && <p role="alert" className='p-0 start-0 ms-3'>{errors.email?.message}</p>}
        </div>

        <div className="col-12">
          <input
            type="submit"
            value="Subscribe"
            className="btn btn-custom-1 btn-lg rounded-0 border-0 w-100 p-3"
          />
        </div>
      </form>
    </>
  );
}
