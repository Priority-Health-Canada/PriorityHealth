import { useState } from "react";
import NavBar from "./NavBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import PatientForm from "./PatientForm";
import { Button, Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';


function Homepage({handleLinkToFormClickedProp}){
    // const navigate = useNavigate();
    // // const [linkToFormClicked, setLinkToFormClicked] = useState(false);

    // const handleLinkToFormClicked = () => {
    //     //setLinkToFormClicked(true);
    //     navigate("/registration-form");
    // }

    return(
        <>
            <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
  <div className="card card-sm border-0" style={{width: '90%', maxWidth: '800px'}}>
    <div className="card-body">
      <div className="jumbotron d-flex justify-content-center align-items-center" style={{backgroundColor: 'rgba(0,0,0,0.85)', color: 'white', height: '70vh'}}>
        <div className="container text-center">
          <h1 className="display-4">Welcome to our Online Health Platform</h1>
          <p className="lead">We help you take control of your health with our easy-to-use platform.</p>
          <hr className="my-4" />
          <p className="lead">
            <button className="btn btn-warning btn-lg" onClick={handleLinkToFormClickedProp}>Healthcare Registry Form</button>   
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Homepage;