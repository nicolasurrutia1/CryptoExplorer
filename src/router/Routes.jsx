import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import CryptoPage from "../pages/CryptoPage";
import NotFoundPage from "../pages/NotFoundPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/crypto",
        element: <CryptoPage />,
      },
    ],
  },
]);
export default Routes;
