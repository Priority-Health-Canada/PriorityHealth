import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { Button, Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';


function Homepage({handleLinkToFormClickedProp}){
    const navigate = useNavigate();

    // Link to Form
    const handleLinkToFormClicked = () => {
        navigate("/registration-form");
    }

    return(
        <>
          <NavBar isHomePage={true} />
          <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="card card-sm border-0" style={{width: '95%', maxWidth: '870px'}}>
              <div className="card-body">
                <div className="jumbotron d-flex justify-content-center align-items-center" style={{backgroundColor: 'rgba(0,0,0,0.85)', color: 'white', height: '70vh'}}>
                  <div className="container text-center">
                    <h1 className="display-4">Welcome to Online Health Platform</h1>
                    <p className="lead">We help to connect you to a medical professional prioritizing your health conditions.</p>
                    <hr className="my-4" />
                    <p className="lead">
                      <button className="btn btn-warning btn-lg" onClick={handleLinkToFormClicked}>Healthcare Registry Form</button>   
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