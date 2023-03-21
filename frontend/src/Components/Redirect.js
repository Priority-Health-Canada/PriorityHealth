import React from "react";
import { Route, Routes } from "react-router-dom";
import { Feedback } from "./Feedback";
import PatientForm from "./PatientForm";

function Redirect() {
  return (
    <Routes>
      <Route exact path="/" element=<PatientForm /> />
      <Route path="/feedback" element=<Feedback /> />
    </Routes>
  );
}
// <Route exact path="/" component={PatientForm} />
export default Redirect;
