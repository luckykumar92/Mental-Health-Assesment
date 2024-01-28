import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/pages/Home.jsx";
import Error404Page from "./components/pages/Error404Page.jsx";
import GetHelp from "./components/pages/Gethelp.jsx";


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
