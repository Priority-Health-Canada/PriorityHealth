import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
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
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/registration-form" element={<PatientForm />} />
        {/* <Route exact path="/registration-form/feedback" element={<Feedback />} /> */}
      </Routes>
    </>
  );
}

export default Redirect;
