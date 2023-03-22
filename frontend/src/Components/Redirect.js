import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Feedback } from "./Feedback";
import PatientForm from "./PatientForm";
//import patientDataService from "../services/patientDataService";

function Redirect() {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   loadBackendData();
  // }, []);

  // const loadBackendData = async() => {
  //   const message = await patientDataService.sampleGetFunction();
  //   setData(message);
  // }

  return (
    <>
      <Routes>
        <Route exact path="/" element=<PatientForm /> />
        <Route path="/feedback" element=<Feedback /> />
      </Routes>
    </>
  );
}
// <Route exact path="/" component={PatientForm} />
export default Redirect;
