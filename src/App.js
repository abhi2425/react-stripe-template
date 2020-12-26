import React from "react";
import "./App.css";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Navigation from "./Components/Navigation/Navigation";
import Body from "./Components/Body/Body";
import Menu from "./Components/Navigation/Menu/Menu";
const App = () => {
  return (
    <div className="app">
      <SideDrawer />
      <Navigation />
      <Menu />
      <Body />
    </div>
  );
};

export default App;
