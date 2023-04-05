import { useState } from "react";
import { Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function LoginPage({handleLoginPageClose}){
    
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isMedicalStaff, setMedicalStaff] = useState(false);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleAccountTypeChange(event) {
    if(event.target.value === "medicalStaff"){
        setMedicalStaff(true);
    }else{
        setMedicalStaff(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const loginData = {
        username,
        password,
        isMedicalStaff
    }
    console.log(loginData);
    
    isMedicalStaff ? navigate("/patient-list") : navigate("/");
  }

    return(
        <>
            <Modal show={true} onHide={handleLoginPageClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="card mx-auto" style={{ maxWidth: '500px' }}>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" onChange={handleUsernameChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" onChange={handlePasswordChange} />
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label style={{ marginRight: '10px' }}>Log in as:</label>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="accountType" id="admin" value="admin" onChange={handleAccountTypeChange} />
                                    <label className="form-check-label" htmlFor="admin">Admin</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="accountType" id="medicalStaff" value="medicalStaff" onChange={handleAccountTypeChange} />
                                    <label className="form-check-label" htmlFor="medicalStaff">Medical Staff</label>
                                    </div>
                                </div>
                                <br/>
                                <button type="submit" className="btn btn-outline-dark bg-warning">Login</button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )

}
export default LoginPage;
