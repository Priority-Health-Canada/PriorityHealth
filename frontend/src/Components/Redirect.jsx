import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import NavBar from "./NavBar";
import PatientForm from "./PatientForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Feedback } from "./Feedback";

function Redirect() {
  
  const navigate = useNavigate();
  
  // Link to Form
  const [linkToFormClicked, setLinkToFormClicked] = useState(false);
  const handleLinkToFormClicked = () => {
      setLinkToFormClicked(true);
      navigate("/registration-form");
  }

  // Form Submit button state - Determines visibility of Admin Login button
  const [isSubmit, setIsSubmit] = useState(false);
  const handleAdminLoginVisibility = () => {
    setIsSubmit(true);
    //return false;
  }


  return (
    <>
      <NavBar isLinkToFormClicked={linkToFormClicked} isFormSubmitProp={isSubmit}/>
      <Routes>
          <Route exact path="/" element={<Homepage handleLinkToFormClickedProp={handleLinkToFormClicked} handleAdminLoginVisibilityProp={handleAdminLoginVisibility}/>}></Route>
          <Route exact path="/registration-form" element={<PatientForm handleAdminLoginVisibilityProp={handleAdminLoginVisibility} isSubmitProp={isSubmit} />} />
          {/* <Route exact path="/registration-form/feedback" element={<Feedback />} /> */}
      </Routes>
    </>
  );
}
// <Route exact path="/" component={PatientForm} />
export default Redirect;
