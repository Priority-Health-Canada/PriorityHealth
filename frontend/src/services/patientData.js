import http from "./http-common";

class PatientData {
  async sendData(data) {
    return await http.post("api/patient", data);
  }

  async getAllPatient(){
    return await http.get("api/patient-list");
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PatientData();
