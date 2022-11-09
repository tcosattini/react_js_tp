import React from "react";
import "./styles.css";
import { Outlet } from "react-router-dom";

import PermanentDrawerLeft from "./components/nav_menu/PermanentDrawerLeft";

const App = () => {
  return (
    <>
      <>
        <div className="App">
          <PermanentDrawerLeft />
          <Outlet />
        </div>
      </>
    </>
  );
};

export default App;
