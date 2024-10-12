import React from "react";
import "./about.scss";
import Banner from "../../components/banner/banner";
import BannerAbout from "../../img/kalen-emsley-Bkci_8qcdvQ-unsplash.png";
import Collapse from "../../components/collapse/collapse";
import AboutContent from "../../data/collapseContent.json";

export default function About() {
  // console.log(AboutContent);
  return (
    <>
      <Banner image={BannerAbout} />
      <div className="main-about">
        <div className="about-content">
          {AboutContent.map((about) => (
            <Collapse title={about.title} key={about.id}>
              <p>{about.description} </p>
            </Collapse>
          ))}
        </div>
      </div>
    </>
  );
}
