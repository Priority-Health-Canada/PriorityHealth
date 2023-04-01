import React from "react";
import { Route, Routes } from "react-router-dom";
import PatientForm from "./PatientForm";
import AdminPage from "./AdminComponents/AdminPage";
import PrivateRoute from "./PrivateRoute";

function Redirect() {
  return (
    <>
      <Routes>
        <Route exact path="/admin" element={<PrivateRoute />}>
          <Route exact path="/admin" element={<AdminPage />} />
        </Route>
        <Route exact path="/" element=<PatientForm /> />
      </Routes>
    </>
  );
}

export default Redirect;
