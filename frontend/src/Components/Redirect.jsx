import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import NavBar from "./NavBar";
import PatientForm from "./PatientForm";
import { Route, Routes } from "react-router-dom";

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
