import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import PatientForm from "./PatientForm";
import AdminPage from "./AdminComponents/AdminPage";
import PrivateRoute from "./PrivateRoute";
import removeExpiredToken from "../services/tokenService";

function Redirect() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    removeExpiredToken(); // call function to remove expired token on component mount
    const interval = setInterval(() => {
      removeExpiredToken(); // call function to remove expired token every minute
    }, 60000);
    return () => clearInterval(interval); // clear interval on component unmount
  }, []);
  return (
    <>
      <Routes>
        <Route exact path="/admin" element={<PrivateRoute />}>
          <Route exact path="/admin" element={<AdminPage />} />
        </Route>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/registration-form" element={<PatientForm />} />
        {/* <Route exact path="/registration-form/feedback" element={<Feedback />} /> */}
      </Routes>
    </>
  );
}

export default Redirect;
