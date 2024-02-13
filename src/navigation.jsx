import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GetHelp from "./pages/GetHelp";
import Error404Page from "./pages/Error404Page";
import Test from "./pages/Test";
import HomePage from "./pages/HomePage";
import FindTherapistPage from "./pages/FindTherapistPage";
import DepressionTestPage from "./pages/DepressionTestPage";
import MentalHealthTodayTestPage from "./pages/MentalHealthTodayTestPage";
import AngerManagementTestPage from "./pages/AngerManagementTestPage";

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
        path: "depression-test",
        element: <DepressionTestPage />,
      },
      {
        path: "mental-health-test",
        element: <MentalHealthTodayTestPage />,
      },
      {
        path: "anger-management-test",
        element: <AngerManagementTestPage />,
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
