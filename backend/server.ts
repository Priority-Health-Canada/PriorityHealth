import express from "express";
import cors from "cors";

const app = express(); //Create an instance of express app
app.use(cors()); //Allow different domains to access endpoints in backend
app.use(express.json()); // parse requests of content-type - application/json

app.get("/", (req, res) => {
  res.send("From BACKEND (Port 5000): Priority Based Family Physician Access");
});

// Handle POST requests to /api/patient
app.post("/api/patient", (req, res) => {
  // Process the data from the request body
  console.log("We ar here");
  const name = req.body.name;
  const dob = req.body.dob;
  const gender = req.body.gender;
  const email = req.body.email;

  // Save the data to your database or file
  // ...
  console.log(req.body);

  // Send a response to the client
  res.send(name);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
