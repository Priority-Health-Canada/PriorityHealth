import http from "./http-common";

class PatientData {
  sendData(data) {
    return http.post("api/patient", data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PatientData();
