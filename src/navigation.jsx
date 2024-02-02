import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import GetHelp from "./pages/GetHelp";
import Error404Page from "./pages/Error404Page";
import Test from "./pages/Test";

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
        path: "/test",
        element: <Test />,
      },
      {
        path: "*",
        element: <Error404Page />,
      },
    ],
  },
]);

export default router;
