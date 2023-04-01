import React, { useState } from "react";
import LoginPage from "./AdminComponents/LoginPage";
import LoginButton from "./LoginButton";

const NavBar = ({isHomePage}) => {
  
  const [showLoginPage, setShowLoginPage] = useState(false);
  const handleAdminButtonClick = () => {
    setShowLoginPage(true);
  }

  const handleLoginPageClose = () => {
    setShowLoginPage(false);
  }


  return (
    <>
      {/* <div className="navbar navbar-dark" style={{backgroundColor: 'rgba(6,36,75)'}}> */}
      <div className="navbar navbar-dark" style={{backgroundColor: '#1d3b55'}}>
        <div className="container-fluid px-5">
          <a
            className="navbar-brand navbar-light fw-bold"
            style={{ color: "rgba(255,210,7,255)", fontSize: "30px" }}
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
