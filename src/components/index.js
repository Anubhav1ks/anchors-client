import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { isAuth } from "../functions/Auth";
import { Loader } from "./LoaderComponent";

const Dashboard = React.lazy(() => import("./Dashboard"));
const Analatics = React.lazy(() => import("./Analatics"));
const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    module: "Dashboard",
  },
  {
    path: "/analatics",
    component: Analatics,
    module: "Dashboard",
  },
];
const DefaultLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth()) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              exact
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default DefaultLayout;
