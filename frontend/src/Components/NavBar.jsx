import React, { useState } from "react";
import LoginPage from "./AdminComponents/LoginPage";
import LoginButton from "./LoginButton";

const NavBar = ({isSubmitProp}) => {

  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleAdminButtonClick = () => {
    setShowLoginPage(true);
    console.log("Admin login button clicked");
  }

  const handleLoginPageClose = () => {
    setShowLoginPage(false);
  }


  return (
    <>
      <div
        className="navbar navbar-dark bg-warning ml-0"
        style={{ width: "100%" }}
      >
        <div className="container mx-7">
          <a
            className="navbar-brand navbar-light fw-bold"
            style={{ color: "black" }}
            href="/"
          >
            Priority Health Logo
          </a>
        </div>
        {isSubmitProp ? <div></div>: <LoginButton handleClick={handleAdminButtonClick}/>}
      </div>
      {showLoginPage && <LoginPage handleLoginPageClose={handleLoginPageClose}/>}
    </>
  );
};

export default NavBar;
