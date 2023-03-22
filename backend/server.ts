import express from "express";
import cors from 'cors';

const app = express();  //Create an instance of express app
app.use(cors());  //Allow different domains to access endpoints in backend
app.use(express.json());  // parse requests of content-type - application/json
app.use(express.static("./public"));  //Static files

app.get("/", (req, res) => {
  //res.redirect("/views/metricForm");
  //res.render("metricForm.ejs");
  res.send('From BACKEND (Port 5000): Priority Based Family Physician Access');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
