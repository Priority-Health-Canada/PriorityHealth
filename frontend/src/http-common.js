// Axios used to make requests to backend
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-type": "application/json"
  }
});