import React from "react";
import LoginButton from "./LoginButton";

const NavBar = ({isSubmitProp}) => {
  return (
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
      {isSubmitProp ? <div></div>: <LoginButton />}
    </div>
  );
};

export default NavBar;
