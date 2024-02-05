import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"


const Dashboard  = React.lazy(() => import("./Dashboard"))
const Analatics =  React.lazy(()=>import("./Analatics"))

const DefaultLayout = () => {
  const routes = [
    {
      path: '/dashboard',
      component: Dashboard,
      module: 'Dashboard',
    },
    {
      path: '/analatics',
      component: Analatics,
      module: 'Dashboard',
    },
  ]
  return (
    <div>
      <Suspense fallback={"<SpinnerLoader />"}>
        <Routes>
          {routes.map((route, index) => (
            <Route
            exact
              key={index}
              path={route.path}
              element={
                <route.component />
              }
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}

export default DefaultLayout