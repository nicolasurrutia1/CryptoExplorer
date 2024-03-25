// import { useState } from "react";
import "./styles/App.css";
import { Outlet } from "react-router-dom";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
// import Routes from "./router/Routes.jsx";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
      {/* <RouterProvider router={Routes} /> */}
    </>
  );
}

export default App;
