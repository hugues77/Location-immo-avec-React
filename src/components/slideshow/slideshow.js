import React from "react";
import ImageSlides from "../../img/kalen-emsley-Bkci_8qcdvQ-unsplash.png";
import "./slideshow.scss";
import Ratings from "../../img/star-active.png";
import Imageprofil from "../../img/banner_home.png";
import Collapse from "../collapse/collapse";

export default function Slideshow() {
  return (
    <>
      <div className="main-slideshow">
        <img src={ImageSlides} alt="slide user" />
      </div>
      <div className="slide-content">
        <div className="title-log">
          <div className="title">Cozy loft on the canal Saint-Martin</div>
          <div className="region-log">Paris, ile-de-france</div>
          <div className="tag-log">
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
          </div>
        </div>
        <div className="profil">
          <div className="title-profil">
            <span className="title-name">
              <span>Alexandre</span>
              <span>Dumas</span>
            </span>
            <img src={Imageprofil} alt="profil hote" />
          </div>
          <div className="stars">
            <img src={Ratings} alt="star 1" />
            <img src={Ratings} alt="star 2" />
            <img src={Ratings} alt="star 3" />
            <img src={Ratings} alt="star 4" />
            <img src={Ratings} alt="star 5" />
          </div>
        </div>
      </div>
      <div className="slide-collapse">
        <div className="collapse-item">
          <Collapse title="Description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              commodi sed soluta nulla rem quasi quaerat tempora ad, quisquam
              quam doloribus deleniti exercitationem asperiores veritatis dicta
              mollitia debitis placeat unde.
            </p>
          </Collapse>
        </div>
        <div className="collapse-item">
          <Collapse title="Equipements">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              commodi sed soluta nulla rem quasi quaerat tempora ad, quisquam
              quam doloribus deleniti exercitationem asperiores veritatis dicta
              mollitia debitis placeat unde.
            </p>
          </Collapse>
        </div>
      </div>
    </>
  );
}
