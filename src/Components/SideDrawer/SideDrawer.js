import React from "react";
import Modal from "../Modal/Modal";
import Menu from "./Menu/Menu";
import data from "../../data";
import Link from "../Navigation/Menu/LinksContainer/Link/Link";
const SideDrawer = () => {
  const menu = data.map((page) => {
    const links = page.links.map((link) => {
      return <Link link={link} key={link.label} />;
    });

    return (
      <Menu menuTitle={page.pageName} key={page.pageName}>
        {links}
      </Menu>
    );
  });
  return (
    <Modal>
      <aside style={{ padding: "3rem" }}>{menu}</aside>
    </Modal>
  );
};

export default SideDrawer;
