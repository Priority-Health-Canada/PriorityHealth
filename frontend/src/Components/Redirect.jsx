import React from "react";
import { Route, Routes } from "react-router-dom";
import PatientForm from "./PatientForm";

function Redirect() {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   loadBackendData();
  // }, []);

  // const loadBackendData = async() => {
  //   const message = await patientDataService.sampleGetFunction();
  //   setData(message);
  // }

  return (
    <>
      <Routes>
        <Route exact path="/" element=<PatientForm /> />
      </Routes>
    </>
  );
}
// <Route exact path="/" component={PatientForm} />
export default Redirect;
