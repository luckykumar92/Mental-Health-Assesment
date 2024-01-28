import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import GetHelp from "./pages/GetHelp";
import Error404Page from "./pages/Error404Page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/get-help",
        element: <GetHelp />,
      },
      {
        path: "*",
        element: <Error404Page />,
      },
    ],
  },
]);

export default router;
