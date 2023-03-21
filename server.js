// server/index.js

const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();
//Static files
app.use(express.static("./public"));

app.get("/", (req, res) => {
  //res.redirect("/views/metricForm");
  res.render("metricForm.ejs");
  //res.send('Priority Based Family Physician Access');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
