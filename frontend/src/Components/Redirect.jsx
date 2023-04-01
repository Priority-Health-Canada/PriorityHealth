import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import PatientForm from "./PatientForm";


function Redirect() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/registration-form" element={<PatientForm />} />
        {/* <Route exact path="/registration-form/feedback" element={<Feedback />} /> */}
      </Routes>
    </>
  );
}
export default Redirect;
