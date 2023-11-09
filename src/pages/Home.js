import React, { useEffect } from "react";
import HomeSlider from "../components/HomeSlider";
import FeaturedProducts from "../components/FeaturedProducts";


export default function Home() {
useEffect(()=>{
  window.scrollTo(0,0)
},[])

  return (
    <>
      <HomeSlider />
      <FeaturedProducts/>
    </>
  );
}
