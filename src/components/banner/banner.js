import React from "react";
import "./banner.scss";
// import ImgBanner from  '../../img/banner_home.png';

export default function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="banner location immo" />
      <div className="banner-phone">
        <span>{title} </span>
      </div>
    </div> 
  );
}
