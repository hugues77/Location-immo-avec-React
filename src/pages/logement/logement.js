import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Slideshow from "../../components/slideshow/slideshow";
import dataLogements from "../../data/logements.json";
import Collapse from "../../components/collapse/collapse";
import Stars from "../../components/star/stars";
import Tags from "../../components/tags/tags";

import "./logement.scss";

export function Logement() {
  const { id } = useParams();
  const redirect = useNavigate();
  const [logement, setLogement] = useState(null);

  //selectionner les données d'après l'ID passer en GET
  // console.log(dataLogements);

  // const logement = dataLogements.find((data) => data.id === id);
  // console.log(logement);

  useEffect(() => {
    const annonces = dataLogements.find((data) => data.id === id);
    setLogement(annonces);

    if (!annonces) {
      // console.log("bonjour");
      redirect("/not-found");
    }
  }, [id, redirect]);

  return (
    <div>
      {logement && (
        <div className="main-logement">
          <Slideshow images={logement.pictures} />
          <div className="slide-content">
            <div className="title-log">
              <div className="title">{logement.title} </div>
              <div className="region-log">{logement.location} </div>
              <div className="tag-log">
                <Tags tags={logement.tags} />
              </div>
            </div>
            <div className="profil">
              <div className="title-profil">
                <span className="title-name">
                  <span>{logement.host.name.split(" ")[0]} </span>
                  <span>{logement.host.name.split(" ")[1]} </span>
                </span>
                <img src={logement.host.picture} alt="profil hote" />
              </div>
              <div className="stars">
                <Stars rating={logement.rating} />
              </div>
            </div>
          </div>
          <div className="slide-collapse">
            <div className="collapse-item">
              <Collapse title="Description">
                <p>{logement.description}</p>
              </Collapse>
            </div>
            <div className="collapse-item">
              <Collapse title="Equipements">
                {logement.equipments.map((equip, index) => (
                  <ul key={index}>
                    <li>{equip} </li>
                  </ul>
                ))}
              </Collapse>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
