import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";


function Homepage({handleLinkToFormClickedProp}){
    const navigate = useNavigate();

    // Link to Form
    const handleLinkToFormClicked = () => {
        navigate("/registration-form");
    }

    return(
        <>
          <NavBar isHomePage={true} />
          <head>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
          </head>
          <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="card card-sm border-0" style={{width: '93%', maxWidth: '860px'}}>
              <div className="card-body">
                <div className="jumbotron d-flex justify-content-center align-items-center" style={{backgroundColor: '#9cbfdd', color: 'rgba(6,36,75)', fontWeight: "bold", height: '70vh', fontFamily: 'Roboto, sans-serif'}}>
                  <div className="container text-center">
                    <h1 className="display-5 mb-4" style={{fontWeight: 'bold'}}>Your Journey to Wellness Begins Here</h1>
                    <p className="lead" style={{fontSize:'30px', fontWeight: 'bold'}}>Connecting to a doctor just got simpler!</p>
                    <hr className="my-4" />
                    <p className="lead" style={{fontWeight: 'bold'}}>Fill out the form below to get started:</p>
                    <p className="lead">
                      {/* <button className="btn btn-warning btn-lg" onClick={handleLinkToFormClicked}>Register for Healthcare</button> */}
                      <button className="btn btn-lg" style={{backgroundColor:'#292b2c', color: '#f7f7f7'}} onClick={handleLinkToFormClicked}>Register for Healthcare</button>   
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