// import { Card, Row, Col } from 'react-bootstrap';

import { useEffect, useState } from "react";
import patientData from "../../services/patientData";
import NavBar from "../NavBar";

function MedicalStaffHomePage(){

    const [patientsList, setPatientsList] = useState([]);

    useEffect(() => {
        const getAllPatient = async() => {
            try {
                const res = await patientData.getAllPatient();
                // Compare the current value of patientsList with the new data returned from the API call
                if (JSON.stringify(res.data) !== JSON.stringify(patientsList)) {
                    setPatientsList(res.data);
                }
                console.log(patientsList);
            } catch (error) {
                console.log(error);
            }
            
        }
        getAllPatient();  
    }, [patientsList])
    
    
    return(
        <>
            <NavBar isHomePage={false}/>
            Physician Home Page
            <div className="card" style={{backgroundColor: '#9cbfdd'}}>
                <div className="card-body" style={{margin: '2rem'}}>
                    <div className="row text-center justify-content-between" style={{ fontWeight: 'bold', fontSize: '18px' }}>
                        <div className="col">Patient Name</div>
                        <div className="col">Gender</div>
                        <div className="col">Date of Birth</div>
                        <div className="col">Health Metric Score</div>
                        <div className="col">Health Conditions</div>
                    </div>
                    <p>jj</p>
                    {patientsList && patientsList.map((eachPatient) => 
                        <div key={eachPatient._id} className="row text-center shadow py-3 mb-4 bg-white rounded">
                            <div className="col">{eachPatient.name}</div>
                            <div className="col">{eachPatient.gender}</div>
                            <div className="col">{eachPatient.dob}</div>
                            <div className="col">{eachPatient.pmScore}</div>
                            <div className="col">ICS codes...</div>
                        </div>
                    )}
                    
                </div>
            </div>

        </>
    )   
}

export default MedicalStaffHomePage;