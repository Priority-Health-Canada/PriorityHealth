import express from "express";
import cors from "cors";
import PatientInfo from "./types/patientInfo";
import { saveData } from "./controller/controller";
import calcultePMS from "./controller/calculatePMS";

const path = require("path");
const app = express(); //Create an instance of express app
app.use(cors()); //Allow different domains to access endpoints in backend
app.use(express.json()); // parse requests of content-type - application/json

// Pointing to the Express server where the React build is.
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// app.get("/", (req, res) => {
//   res.send("From BACKEND (Port 5000): Priority Based Family Physician Access");
// });

// Handle POST requests to /api/patient
app.post("/api/patient", async (req, res) => {
  try {
    // Parse the data from the request body
    const patientData: PatientInfo = {
      name: req.body.name,
      dob: req.body.dob,
      gender: req.body.gender,
      email: req.body.email,
    };

    // Calculate Patient Metric Score based off their data input in the form
    const pmScore = calcultePMS(patientData);

    // Save the data to your database or file
    await saveData({ ...patientData, pmScore: pmScore });
    // Send a success response back to the client
    res.send("Data saved to file");
  } catch (error) {
    // If there's an error, log it and send an error response to the client
    console.log(error);
    res.status(500).send("Error saving data to file");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
