import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error404Page from "./pages/Error404Page";
import HomePage from "./pages/HomePage";
import DepressionTestPage from "./pages/DepressionTestPage";
import MentalHealthTodayTestPage from "./pages/MentalHealthTodayTestPage";
import AngerManagementTestPage from "./pages/AngerManagementTestPage";
import SelfEsteemTestPage from "./pages/SelfEsteemTestPage";
import AnxietyTestPage from "./pages/AnxietyTestPage";

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
        path: "self-esteem-test",
        element: <SelfEsteemTestPage />,
      },
      {
        path: "anxiety-test",
        element: <AnxietyTestPage />,
      },
      {
        path: "*",
        element: <Error404Page />,
      },
    ],
  },
]);

export default router;
