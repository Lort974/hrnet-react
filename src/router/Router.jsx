import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import EmployeeList from "../pages/EmployeeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <>
        <Header />
        <ErrorPage />
        <Footer />
      </>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "employee-list", element: <EmployeeList /> },
      { path: "welcome", element: <Welcome /> },
    ],
  },
]);

export default router;
