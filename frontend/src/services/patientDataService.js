import http from "../http-common";

class PatientDataService{
    async sampleGetFunction(){
        const response = await http.get("/");
        return response.data;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PatientDataService();