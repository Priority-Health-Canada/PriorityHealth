import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_URL  || "http://localhost:5000/",
  // baseURL: "http://localhost:5000/",
  headers: {
    "Content-type": "application/json",
  },
});
