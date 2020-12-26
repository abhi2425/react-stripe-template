import React, { useEffect, useRef } from "react";
import "./Menu.css";
import { useGlobalContext } from "../../../Context/context";
import LinksContainer from "./LinksContainer/LinksContainer/";
import Link from "./LinksContainer/Link/Link";
const Menu = () => {
  const { Pages, showMenu, location } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const menu = container.current;
    menu.style.left = `${location.center}px`;
    menu.style.top = `${location.bottom + 25}px`;
  }, [page, location]);
  const page = Pages.map((page) => {
    const subLink = page.links.map((subLink) => {
      return <Link link={subLink} key={subLink.label} />;
    });
    return (
      <LinksContainer linkTitle={page.pageName} key={page.pageName}>
        {subLink}
      </LinksContainer>
    );
  });
  return (
    <div className={showMenu ? "menu show" : "menu"} ref={container}>
      {page}
    </div>
  );
};

export default Menu;
