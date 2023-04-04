import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import AdminData from "../../services/adminData";
import ValidationErrorMsg from "../ValidationErrorMsg";

function LoginPage({ handleLoginPageClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState("");
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setShowError("");
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setShowError("");
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginData = {
      username,
      password,
    };
    // console.log("Data: ", loginData);

    try {
      const res = await AdminData.sendData(loginData);
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/admin"); // navigate to AdminPage
    } catch (error) {
      //console.log(error.response.data);
      setShowError(error.response.data?.message);
    }
  };

  return (
    <>
      <Modal show={true} onHide={handleLoginPageClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card mx-auto" style={{ maxWidth: "500px" }}>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={handlePasswordChange}
                  />
                </div>
                <br />
                <ValidationErrorMsg showErrorProp={showError}/>
                <button
                  type="submit"
                  className="btn btn-outline-dark bg-warning"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
export default LoginPage;
