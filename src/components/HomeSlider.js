import React, { useEffect, useRef } from "react";
import "../assets/css/slider.css";
import slide1 from "../assets/images/slide-1-1920x850.jpg";
import slide2 from "../assets/images/slide-2-1920x850.jpg";
import slide3 from "../assets/images/slide-3-1920x850.jpg";
import { register } from "swiper/element/bundle";
import HomeSliderSlide from "./HomeSliderSlide";
import "../assets/css/homeSlider.css";
register();

export default function HomeSlider() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const homeSliderSwiper = swiperElRef.current;
   
    homeSliderSwiper.addEventListener("activeindexchange", (e) => {
      const currentSlideHeader1 = document.querySelector(
        `[data-swiper-slide-index="${homeSliderSwiper.swiper.realIndex}"] h2 span:nth-child(1)`
      );
      const currentSlideHeader2 = document.querySelector(
        `[data-swiper-slide-index="${homeSliderSwiper.swiper.realIndex}"] h2 span:nth-child(2)`
      );
      const currentSlideText = document.querySelector(
        `[data-swiper-slide-index="${homeSliderSwiper.swiper.realIndex}"] p`
      );
      const currentSlideLink = document.querySelector(
        `[data-swiper-slide-index="${homeSliderSwiper.swiper.realIndex}"] .slide-link`
      );
      const prevSlideHeader1 = document.querySelector(
        ".swiper-slide-prev h2 span:nth-child(1)"
      );
      const prevSlideHeader2 = document.querySelector(
        ".swiper-slide-prev h2 span:nth-child(2)"
      );
      const prevSlideText = document.querySelector(".swiper-slide-prev p");
      const prevSlideLink = document.querySelector(
        ".swiper-slide-prev .slide-link"
      );
      const objStyle = {
        slideHeaderLine1Classes: [
          "animate__animated",
          "animate__fadeInDown",
          "animate__faster",
          "animate__delay-1s",
        ],
        slideHeaderLine2Classes: [
          "animate__animated",
          "animate__fadeInLeft",
          "animate__faster",
          "animate__delay-1s",
        ],
        slideTextClasses: [
          "animate__animated",
          "animate__fadeInRight",
          "animate__faster",
          "animate__delay-2s",
        ],
        slideLinkClasses: [
          "animate__animated",
          "animate__fadeInLeft",
          "animate__faster",
          "animate__delay-3s",
        ],
      };
      prevSlideHeader1 &&
        prevSlideHeader1.classList.remove(...objStyle.slideHeaderLine1Classes);
      prevSlideHeader2 &&
        prevSlideHeader2.classList.remove(...objStyle.slideHeaderLine2Classes);
      prevSlideText &&
        prevSlideText.classList.remove(...objStyle.slideTextClasses);
      prevSlideLink &&
        prevSlideLink.classList.remove(...objStyle.slideLinkClasses);
      currentSlideHeader1.classList.add(...objStyle.slideHeaderLine1Classes);
      currentSlideHeader2.classList.add(...objStyle.slideHeaderLine2Classes);
      currentSlideText.classList.add(...objStyle.slideTextClasses);
      currentSlideLink.classList.add(...objStyle.slideLinkClasses);
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view="1"
      pagination="true"
      navigation="true"
      loop="true"
      id="homeSlider"
    >
      <swiper-slide>
        <HomeSliderSlide
          slideImg={slide1}
          slideHeaderLine1="Highest quality 1"
          slideHeaderLine2="flooring solutions1"
          slideText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maxime!"
          slideLinkText="Blog"
          slideLinkUrl="blog"
        />
      </swiper-slide>
      <swiper-slide>
        <HomeSliderSlide
          slideImg={slide2}
          slideHeaderLine1="Highest quality 2"
          slideHeaderLine2="flooring solutions2"
          slideText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maxime!"
          slideLinkText="Shop now"
          slideLinkUrl="shop"
        />
      </swiper-slide>
      <swiper-slide>
        <HomeSliderSlide
          slideImg={slide3}
          slideHeaderLine1="Highest quality 3"
          slideHeaderLine2="flooring solutions3"
          slideText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maxime!"
          slideLinkText="Aboute Us"
          slideLinkUrl="aboutus"
        />
      </swiper-slide>
    </swiper-container>
  );
}
