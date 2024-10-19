import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoHeader from "../../img/LOGO_header.png";
import LogoHeaderPhone from "../../img/LOGO_header_phone.png";
import "./layout.scss";

export const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo_dekstop">
          <img src={LogoHeader} alt="logo du site kasa" />
        </Link>
        <Link to="/" className="logo_phone">
          <img src={LogoHeaderPhone} alt="logo du site kasa" />
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
