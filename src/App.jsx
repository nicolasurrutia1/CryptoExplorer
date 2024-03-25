import "./styles/App.css";
import { Outlet } from "react-router-dom";

import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />      
    </>
  );
}

export default App;
