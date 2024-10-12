import React, { useState } from "react";
// import ImageSlides from "../../img/kalen-emsley-Bkci_8qcdvQ-unsplash.png";
import "./slideshow.scss";
import ArrowLeft from "../../img/V_left.png";
import ArrowRight from "../../img/V_right.png";

// import { useNavigate, useParams } from "react-router-dom";

export default function Slideshow({ images }) {
  // console.log(images);
  //id qui n'a qu'une image: 2139a317

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
      {images.length > 1 ? (
        <div className="main-slideshow">
          <span className="prev" onClick={prevImages}>
            <img src={ArrowLeft} alt="direction gauche" />
          </span>
          <img
            src={images[imageIndex]}
            alt={`Images` + (imageIndex + 1)}
            key={imageIndex + 1}
          />
          <span className="next" onClick={nextImages}>
            <img src={ArrowRight} alt="direction droite" />
          </span>
          <span className="counter">
            {imageIndex + 1 + " / " + images.length}
          </span>
        </div>
      ) : (
        <div className="main-slideshow">
          <img src={images[imageIndex]} alt={`Images` + (imageIndex + 1)} />
        </div>
      )}
    </>
  );
}
