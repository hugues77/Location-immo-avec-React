import React from "react";
import "./stars.scss";
import Ratings from "../../img/star-active.png";
import RatingsFalse from "../../img/_Rate_false.png";

export const Stars = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <img className="img-star" src={Ratings} key={i} alt={`star` + i} />
      );
    } else {
      stars.push(
        <img className="img-star" src={RatingsFalse} key={i} alt={`star` + i} />
      );
    }
  }
  // console.log(rating); 
  return stars;
}
