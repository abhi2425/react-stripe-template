import React from "react";
import "./Navigation.css";
import Pages from "./Pages/Pages";
import Button from "../Button/Button";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../Context/context";
const Navigation = () => {
  const { displayModalHandler, hideMenuHandler } = useGlobalContext();
  const closeMenu = (e) => {
    if (!e.target.classList.contains("navButton")) {
      hideMenuHandler();
    }
  };
  return (
    <nav className="navigation" onMouseOver={closeMenu}>
      <div>
        <img
          src="https://react-projects-13-stripe-submenus.netlify.app/static/media/logo.1090473d.svg"
          alt="Stripe"
          className="logo"
        />
        <Pages />
        <Button value={"Sign in"} />
        <button className="menuBtn" onClick={displayModalHandler}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
