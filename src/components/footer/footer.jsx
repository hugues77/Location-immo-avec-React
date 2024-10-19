import React from 'react';
import LogoFooter from "../../img/LOGO_footer.png";
import './footer.scss';


export const Footer = () => {
  return (
    <div className="footer">
        <p>
            <img src={LogoFooter} alt="Footer kasa" />
        </p>
        <div className="footer-phone">
            <span> © 2020 Kasa. All rights reserved</span>
        </div>
    </div>
  )
}


