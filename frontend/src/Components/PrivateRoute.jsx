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
  const decodedToken = jwt_decode(token);
  const accountType = decodedToken.accountType;

  useEffect(() => {
    
    if (!token) {
      navigate("/");
    }else {
      if (!allowedAccountTypesProp.includes(accountType)) {
        navigate("/");
      }
    }

    if(removeExpiredToken(decodedToken)){
      navigate("/");
    }

  }, [navigate, token, allowedAccountTypesProp, accountType, decodedToken]);

  // No token or accountType does not have access to an interface
  if (!token || (!allowedAccountTypesProp.includes(accountType))) {
    return <Navigate to="/" replace />;;
  }



  return <ElementProp />;

};

export default PrivateRoute;
