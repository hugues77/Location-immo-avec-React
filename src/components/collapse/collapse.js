import React, { children, useState } from "react";
import "./collapse.scss";
import ArrowBack from "../../img/arrow_back.png";

export default function Collapse(props) {
  const [isopen, setIsopen] = useState(false);

  const toggleBtn = () => {
    setIsopen(!isopen);
  };
  return (
    <div className="main-collapse">
      <div className="head">
        <p className="title">{props.title} </p>
        <span onClick={toggleBtn}>
          <img
            className={isopen ? "active" : "desactive"}
            src={ArrowBack}
            alt="ouverture / fermeture collapse"
          />
        </span>
      </div>
      {isopen && <div className="collapse-content">{props.children}</div>}
    </div>
  );
}
