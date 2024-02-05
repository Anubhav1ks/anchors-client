/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Auth';
import Signup from './components/Signup';
import OtpVerify from './components/Signup/Otp';
import DefaultLayout from './components/';


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
          <Route
            path="/signup"
            element={
              <Signup />
            }
          />
          <Route
            path="/otp"
            element={
              <OtpVerify />
            }
          />

          <Route
            path="/*"
            element={
              <DefaultLayout />
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
