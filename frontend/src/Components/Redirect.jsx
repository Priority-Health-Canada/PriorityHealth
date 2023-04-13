import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import PatientForm from "./PatientForm";
import MedicalStaffHomePage from "./PhysicianComponents/MedicalStaffHomePage";
import AdminPage from "./AdminComponents/AdminPage";
import PrivateRoute from "./PrivateRoute";

function Redirect() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={
          <PrivateRoute ElementProp={AdminPage} allowedAccountTypesProp={["admin"]} />
        } />
        <Route path="/patient-list" element={
          <PrivateRoute ElementProp={MedicalStaffHomePage} allowedAccountTypesProp={["medicalStaff"]} />
        } />
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/registration-form" element={<PatientForm />} />
        {/* <Route exact path="/patient-list" element={<MedicalStaffHomePage/>} /> */}
        {/* <Route exact path="/registration-form/feedback" element={<Feedback />} /> */}
      </Routes>
    </>
  );
}

export default Redirect;
