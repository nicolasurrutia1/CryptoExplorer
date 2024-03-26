import "./styles/App.css";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Provider store={store}>
      <ResponsiveAppBar />      
      <Outlet />
    </Provider>
  );
}

export default App;
