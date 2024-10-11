import React from "react";
import "./tags.scss";

export default function Tags({ tags }) {
  return (
    <div className="tag-log">
      {tags.map((tag, index) => (
        <div className="tag-span" key={index}>
          <span>{tag} </span>
        </div>
      ))}
    </div>
  );
}
