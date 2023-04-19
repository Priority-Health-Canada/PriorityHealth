import React, { useState } from "react";
import NavBar from "../NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSync } from "@fortawesome/free-solid-svg-icons";
import patientData from "../../services/patientData";

function AdminPage() {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPatients = async () => {
    setIsLoading(true);
    try {
      const response = await patientData.getMspData();
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const verifyPatient = async (id) => {
    const updatedPatients = patients.map((patient) => {
      if (patient._id === id) {
        return { ...patient, status: "Verified" };
      }
      return patient;
    });
    setPatients(updatedPatients);

    try {
      await patientData.updateMspData(id, { status: "Verified" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar isHomePage={false} />
      Admin Home Page
      <div className="card" style={{ backgroundColor: "#9cbfdd" }}>
        <div className="text-end" style={{ marginLeft: "auto" }}>
          <button
            className={`btn btn-warning`}
            style={{ marginRight: "0px" }}
            onClick={fetchPatients}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <FontAwesomeIcon icon={faSync} spin /> Loading
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faSync} /> Update
              </>
            )}
          </button>
        </div>
        <div className="card-body" style={{ margin: "2rem" }}>
          <div
            className="row text-center justify-content-between mb-3"
            style={{ fontWeight: "bold", fontSize: "18px" }}
          >
            <div className="col">Patient Health Number (PHN)</div>
            <div className="col">Medical Services Plan (MSP)</div>
            <div className="col">ICD Codes</div>
            <div className="col">Status</div>
          </div>
          {patients.map((patient) => (
            <div
              key={patient._id}
              className="row text-center justify-content-between mb-3"
              style={{ fontSize: "16px" }}
            >
              <div className="col">{patient.phn}</div>
              <div className="col">{patient.msp}</div>
              <div className="col">{patient.icd}</div>
              <div className="col">
                {patient.status === "Verified" ? (
                  <button className="btn btn-success" disabled>
                    Verified <FontAwesomeIcon icon={faCheck} color="white" />
                  </button>
                ) : (
                  <button
                    className={`btn btn-primary`}
                    onClick={() => verifyPatient(patient._id)}
                    disabled={patient.status === "Verified"}
                  >
                    Verify
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminPage;
