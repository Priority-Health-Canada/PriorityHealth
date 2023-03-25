import axios from "axios";

export default axios.create({
  baseURL: "https://priority-health.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
