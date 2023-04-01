import axios from "axios";

var url = "";

if (process.env.NODE_ENV?.trim() === "development") {
  console.log(process.env.NODE_ENV);
  url = "http://localhost:5000/";
} else if (process.env.NODE_ENV?.trim() === "production") {
  url = process.env.REACT_APP_URL;
}

const http = axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});

// Add an Axios interceptor that attaches a token to the headers of every outgoing request
http.interceptors.request.use(
  (config) => {
    // Get the token from local storage
    const token = localStorage.getItem("token");

    // If a token exists, attach it to the Authorization header in the request
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Return the modified request configuration
    return config;
  },
  // Handle any errors that may occur during the interceptor process
  (error) => Promise.reject(error)
);

export default http;
