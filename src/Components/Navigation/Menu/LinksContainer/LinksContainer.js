import React from "react";
import "./LinksContainer.css";

const LinksContainer = ({ linkTitle, children }) => {
  return (
    <article className="linkContainer">
      <h4 className="linkTitle">{linkTitle}</h4>
      <section className="subLink">{children}</section>
    </article>
  );
};

export default LinksContainer;
