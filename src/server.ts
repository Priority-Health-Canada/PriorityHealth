import express from "express";
import cors from "cors";
import path from "path";
import connectDB from "./config/connectDB";
import { create, getAll } from "./controller/patient.CRUD";
import { validate } from "./controller/validateLogin";

const app = express(); //Create an instance of express app

//connect to db
connectDB();

app.use(cors()); //Allow different domains to access endpoints in backend
app.use(express.json()); // parse requests of content-type - application/json

if (process.env.NODE_ENV?.trim() === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/build"))); // Pointing to the Express server where the React build is.
  app.get("/*", (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
  });
} else if (process.env.NODE_ENV?.trim() === "development") {
  app.get("/", (req: express.Request, res: express.Response) => {
    res.send(
      "From BACKEND (Port 5000): Priority Based Family Physician Access"
    );
  });
}

// Handle POST requests to /api/patient by calling create function to save data in database
app.post("/api/patient", create);
app.post("/api/login", validate);

app.get("/api/patient-list", getAll);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
