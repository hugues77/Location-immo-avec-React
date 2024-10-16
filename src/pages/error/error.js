import React from "react";
import { Link } from "react-router-dom";
import "./error.scss";

export default function Error() {
  return (
    <main className="error">
      <p className="title-404">404</p>
      <p className="sub-title">Oups! La page que vous demandez n'existe pas.</p>
      <span>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </span>
    </main>
  );
}
