import axios from "axios";
import React from "react";

function ReactIsInDevelomentMode() {
  var result = "_self" in React.createElement("div") ? true : false;
  return result;
}

var url = "";

if (ReactIsInDevelomentMode) {
  url = "http://localhost:5000/";
} else {
  url = process.env.REACT_APP_URL;
}

export default axios.create({
  baseURL: url,
  //baseURL: "http://localhost:5000/",
  headers: {
    "Content-type": "application/json",
  },
});
