import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import image1 from "../assets/images/project-12-420x308.jpg"
import image2 from "../assets/images/project-2-420x308.jpg"
import image3 from "../assets/images/project-4-420x308.jpg"
import image4 from "../assets/images/project-5-420x308.jpg"

import image1large from "../assets/images/project-12-1200x800.jpg"
import image2large from "../assets/images/project-2-1200x800.jpg"
import image3large from "../assets/images/project-4-1200x800.jpg"
import image4large from "../assets/images/project-5-1200x800.jpg"

import Lightbox  from 'yet-another-react-lightbox'
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";





export default function FooterLightBox() {
const[index,setIndex]=React.useState(-1)

  const slides=[
    {src:image1large},
    {src:image2large},
    {src:image3large},
    {src:image4large}
  ]
  return (
    <>
      <div className="row row-cols-md-2 row-cols-4 g-2" id="FooterGallary">
        <div
          className="col position-relative"
          role="button"
          onClick={() => {
            setIndex(0);
          }}
        >
          <div className="ratio ratio-1x1">
            <img src={image1} alt="" className="img-fluid" />
            <div className="zoom-icon">
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass-plus"
                size="2x"
              />
            </div>
          </div>
        </div>
        <div
          className="col position-relative"
          role="button"
          onClick={() => {
            setIndex(1);
          }}
        >
          <div className="ratio ratio-1x1">
            <img src={image2} alt="" />
            <div className="zoom-icon">
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass-plus"
                size="2x"
              />
            </div>
          </div>
        </div>
        <div
          className="col position-relative"
          role="button"
          onClick={() => {
            setIndex(2);
          }}
        >
          <div className="ratio ratio-1x1">
            <img src={image3} alt="" />
            <div className="zoom-icon">
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass-plus"
                size="2x"
              />
            </div>
          </div>
        </div>
        <div
          className="col position-relative"
          role="button"
          onClick={() => {
            setIndex(3);
          }}
        >
          <div className="ratio ratio-1x1">
            <img src={image4} alt="" />
            <div className="zoom-icon">
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass-plus"
                size="2x"
              />
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        index={index}
        plugins={[
          Captions,
          Counter,
          Zoom,
          Slideshow,
          Thumbnails,
          Share,
          Fullscreen,
          Download,
        ]}
      />
    </>
  );
}
