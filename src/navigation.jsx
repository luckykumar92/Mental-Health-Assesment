import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GetHelp from "./pages/GetHelp";
import Error404Page from "./pages/Error404Page";
import Test from "./pages/Test";
import HomePage from "./pages/HomePage";
import FindTherapistPage from "./pages/FindTherapistPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "find-therapist",
        element: <FindTherapistPage />,
      },
      {
        path: "get-help",
        element: <GetHelp />,
      },
      {
        path: "test",
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
