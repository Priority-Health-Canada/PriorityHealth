import axios from "axios";

var url = "";

if (process.env.NODE_ENV?.trim() === "development") {
  console.log(process.env.NODE_ENV);
  url = "http://localhost:5000/";
} else if (process.env.NODE_ENV?.trim() === "production") {
  url = process.env.REACT_APP_URL;
}

export default axios.create({
  baseURL: url,
  //baseURL: "http://localhost:5000/",
  headers: {
    "Content-type": "application/json",
  },
});
