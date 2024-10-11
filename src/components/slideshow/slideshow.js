import React, { useState } from "react";
// import ImageSlides from "../../img/kalen-emsley-Bkci_8qcdvQ-unsplash.png";
import "./slideshow.scss";
import ArrowLeft from "../../img/arrow_left.png";
import ArrowRight from "../../img/arrow_right.png";

// import { useNavigate, useParams } from "react-router-dom";

export default function Slideshow({ images }) {
  // const idLog = useParams();
  // const navigate = useNavigate();
  // console.log(DataLogement);

  // console.log(images);

  //creation du state
  const [imageIndex, setImageIndex] = useState(0);

  //image precedente
  const prevImages = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  //images suivante
  const nextImages = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };
  return (
    <>
      <div className="main-slideshow">
        <span className="prev" onClick={prevImages}>
          <img src={ArrowLeft} alt="direction gauche" />
        </span>
        <img src={images[imageIndex]} alt={`Images ${imageIndex + 1}`} />
        <span className="next" onClick={nextImages}>
          <img src={ArrowRight} alt="direction droite" />
        </span>
      </div>
    </>
  );
}
