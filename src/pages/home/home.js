import React from "react";
import "./home.scss";
import Banner from "../../components/banner/banner";
import Card from "../../components/card/card";
import BannerHome from "../../img/banner_home.png";

export default function Home() {
  return (
    <>
      <Banner image={BannerHome} title="Chez vous, partout et ailleurs" />
      <div className="main">
        <article className="logements-card">
          <Card />
        </article>
      </div>
    </>
  );
}
