import axios from "axios";

export default axios.create({
  baseURL: "https://priority-health.herokuapp.com/",
  // baseURL: "http://localhost:5000/",
  headers: {
    "Content-type": "application/json",
  },
});
