import http from "./http-common";

class AdminData {
  async sendData(data) {
    return await http.post("api/login", data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AdminData();
