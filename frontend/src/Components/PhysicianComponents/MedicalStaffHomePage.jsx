// import { Card, Row, Col } from 'react-bootstrap';

function MedicalStaffHomePage({isLoggedInAsPhysician}){
    
    return(
        <>
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
                    <div className="row text-center shadow py-3 mb-4 bg-white rounded">
                        <div className="col">Column 1 Content</div>
                        <div className="col">Column 2 Content</div>
                        <div className="col">Column 3 Content</div>
                        <div className="col">Column 4 Content</div>
                        <div className="col">Column 5 Content</div>

                    </div>
                    <div className="row text-center shadow py-3 mb-4 bg-white rounded">
                        <div className="col">Column 1 Content</div>
                        <div className="col">Column 2 Content</div>
                        <div className="col">Column 3 Content</div>
                        <div className="col">Column 4 Content</div>
                        <div className="col">Column 5 Content</div>
                    </div>
                </div>
            </div>

        </>
    )   
}

export default MedicalStaffHomePage;