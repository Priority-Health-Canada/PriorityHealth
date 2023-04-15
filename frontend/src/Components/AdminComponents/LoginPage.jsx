import { useState } from "react";
import { Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import ValidationErrorMsg from "../ValidationErrorMsg";
import SuperUserData from "../../services/superUser";
   


function LoginPage({ handleLoginPageClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState('');
  const [accountType, setAccountType] = useState('');
  const navigate = useNavigate();

  // const [isMedicalStaff, setMedicalStaff] = useState(false);

  function handleUsernameChange(event) {
    setShowError("");
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setShowError("");
    setPassword(event.target.value);
  }

  function handleAccountTypeChange(event) {

    if(event.target.value === 'medicalStaff'){
      setAccountType('medicalStaff');
    }else if(event.target.value === 'admin'){
      setAccountType('admin');
    }else{
      setAccountType('');
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = {
      username,
      password,
      accountType
    };
    // console.log("Data: ", loginData);

    try {
      const res = await SuperUserData.sendData(loginData);
      const token = res.data.token;
      localStorage.setItem("token", token);
      
      if(accountType === 'medicalStaff'){
        navigate("/patient-list");
      }else if(accountType === 'admin'){
        navigate("/admin"); // navigate to AdminPage
      }
    } catch (error) {
      setShowError(error.response.data?.message);
    }
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
                                    <input className="form-check-input" type="radio" name="accountType" id="admin" value="admin" onChange={handleAccountTypeChange} required/>
                                    <label className="form-check-label" htmlFor="admin">Admin</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="accountType" id="medicalStaff" value="medicalStaff" onChange={handleAccountTypeChange} required/>
                                    <label className="form-check-label" htmlFor="medicalStaff">Medical Staff</label>
                                    </div>
                                </div>
                                <br/>
                                <ValidationErrorMsg showErrorProp={showError} />
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
