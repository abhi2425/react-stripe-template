import React from "react";
import "./Pages.css";
import data from "../../../data";
import { useGlobalContext } from "../../../Context/context";
const Pages = () => {
  const { displayMenuHandler } = useGlobalContext();
  const HandleMenu = (e, page) => {
    const location = e.target.getBoundingClientRect();
    const center = (location.left + location.right) / 2;
    const bottom = location.bottom - 5;
    console.log(location);
    displayMenuHandler(page, { center, bottom });
  };
  const page = data.map((page, pageIndex) => {
    return (
      <li key={pageIndex}>
        <button className="navButton" onMouseOver={(e) => HandleMenu(e, page)}>
          {page.pageName}
        </button>
      </li>
    );
  });
  return <ul>{page}</ul>;
};

export default Pages;
