import React, { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import removeExpiredToken from "../services/tokenService";

/**
 * PrivateRoute component navigates users to only their respective interfaces
 * Does not allow Admin to access Medical Staff interface and vice versa
 * 
 * @param ElementProp is a React component that will rendered
 * @param allowedAccountTypesProp is an array of strings that contain the accountType (admin and/or medicalStaff) who can access the ElementProp Component
 * 
 * @returns the component passed as an argument when the array
 */
const PrivateRoute = ({ElementProp, allowedAccountTypesProp}) => {
  // const isAuthenticated = !!localStorage.getItem("token");
  // return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const isAuthenticated = !!token;
    if (!isAuthenticated) {
      navigate("/");
      return;
    }

    try {
      const decodedToken = jwt_decode(token);
      const accountType = decodedToken.accountType;
      if (!allowedAccountTypesProp.includes(accountType)) {
        navigate("/");
        return;
      }
    } catch(error) {
      navigate("/");
      return;
    }
    
    if (removeExpiredToken(jwt_decode(token))) {
      navigate("/");
      return;
    }

  }, [navigate, allowedAccountTypesProp, token]);

  // No token or accountType does not have access to an interface
  if (!token || (token && !allowedAccountTypesProp.includes(jwt_decode(token).accountType))) {
    return <Navigate to="/" replace />;
  }

  return <ElementProp />;

};

export default PrivateRoute;
