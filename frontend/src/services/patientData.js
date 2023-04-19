import http from "./http-common";

class PatientData {
  async sendData(data) {
    return await http.post("api/patient", data);
  }

  async getAllPatient() {
    return await http.get("api/patient-list");
  }

  async getMspData() {
    return await http.get("api/msp-data");
  }

  async updateMspData(id, updatedData) {
    try {
      const response = await http.put(`/api/msp-data-update`, {
        id: id,
        data: updatedData,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error updating MSP data");
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PatientData();
