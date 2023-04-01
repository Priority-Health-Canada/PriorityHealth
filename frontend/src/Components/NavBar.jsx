import React, { useState } from "react";
import LoginPage from "./AdminComponents/LoginPage";
import LoginButton from "./LoginButton";

// Parameter returns true either when "Health Registry Form" is clicked or when form submitted
const NavBar = ({isHomePage}) => {
  console.log("Is Home Page: ", isHomePage);
  
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
      <div className="navbar navbar-dark bg-warning">
        <div className="container-fluid px-5">
          <a
            className="navbar-brand navbar-light fw-bold"
            style={{ color: "black", fontSize: "30px" }}
            href="/"
          >
            Priority Health Logo
          </a>
          {isHomePage ? (
            <LoginButton handleClick={handleAdminButtonClick} className="px-1" />
          ): null}
        </div>
      </div>
      {showLoginPage && <LoginPage handleLoginPageClose={handleLoginPageClose}/>}
    </>
  );
};

export default NavBar;
