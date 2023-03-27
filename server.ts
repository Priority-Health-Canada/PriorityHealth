import express from "express";
import cors from "cors";
import PatientInfo from "./types/patientInfo";
import { saveData } from "./controller/controller";
import calcultePMS from "./controller/calculatePMS";

const path = require("path");
const app = express(); //Create an instance of express app
app.use(cors()); //Allow different domains to access endpoints in backend
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.static(path.join(__dirname, "../frontend/build"))); // Pointing to the Express server where the React build is.

if (process.env.NODE_ENV?.trim() === "production") {
  app.get("/*", (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
} else if (process.env.NODE_ENV?.trim() === "development") {
  app.get("/", (req: express.Request, res: express.Response) => {
    res.send(
      "From BACKEND (Port 5000): Priority Based Family Physician Access"
    );
  });
}

// Handle POST requests to /api/patient
app.post(
  "/api/patient",
  async (req: express.Request, res: express.Response) => {
    try {
      console.log("FE data in BE: ", req.body);
      // Parse the data from the request body
      const patientData: PatientInfo = {
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        email: req.body.email,
        phn: req.body.phn,
        mhq1: req.body.mhq1,
        mhq2: req.body.mhq2,
        mhq3: req.body.mhq3,
        mhq4: req.body.mhq4,
        mhq5: req.body.mhq5,
        mhq6: req.body.mhq6,
        adl1: req.body.adl1,
        adl2: req.body.adl2,
        adl3: req.body.adl3,
        adl4: req.body.adl4,
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
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
