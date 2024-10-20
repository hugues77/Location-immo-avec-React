// import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./card.scss";
import dataJson from "../../data/logements.json";
import { useEffect, useState } from "react";

export const Card = () => {
  //recherche d'un logement qui n'a qu'une photo de slider
  // const nblogement = dataJson.find((data) => data.pictures.length === 1);
  // console.log(nblogement);

  const [Logements, setLogements] = useState(null);
  useEffect(() => {
    // console.log({Appart});
    setLogements(dataJson);
  }, []);
  // const [Appart, setAppart] = useState([]);

  return ( 
    <>
      <div className="logements">
        {Logements ? (
          Logements.map((appart) => (
            <div className="card" key={appart.id}>
              <Link to={"/logement/" + appart.id}>
                <img src={appart.cover} alt="card image1" />
                <span>{appart.title} </span>
              </Link>
            </div>
          ))
        ) : (
          <p className="attente">Chargement en cours...</p>
        )}
      </div>
    </>
  );
}
