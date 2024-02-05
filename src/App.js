/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Auth';


const App = () => {


  return (
    <Router>
      <Suspense fallback={"<SpinnerLoader />"}>
        <Routes>
        <Route
            path="/"
            element={
                <Homepage />
            }
          />
          <Route
            path="/login"
            element={
              <Login />
            }
          />
          {/* <Route
            exact
            path="/password_reset"
            element={
              <ForgotPassword />
            }
          />
          <Route
            exact
            path="/"
            element={
                <ResetPassword />
            }
          />
          <Route
            path="/*"
            element={
              <DefaultLayout />
            }
          /> */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
