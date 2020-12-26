import React from "react";
import "./Link.css";
const Link = ({ link }) => {
  return (
    <div className="link">
      <i className="linkIcon">{link.icon}</i>
      <a href={link.url} className="linkText">
        {link.label}
      </a>
    </div>
  );
};

export default Link;
