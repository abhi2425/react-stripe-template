import React from "react";
import "./Menu.css";
const Menu = ({ children, menuTitle }) => {
  return (
    <article className="menuPhone">
      <h4 className="menuTitle">{menuTitle}</h4>
      <section className="menuGrid">{children}</section>
    </article>
  );
};

export default Menu;
