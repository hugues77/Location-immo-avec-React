import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoHeader from "../../img/LOGO_header.png";
import "./layout.scss";

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={LogoHeader} alt="logo du site kasa" />
        </Link>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
