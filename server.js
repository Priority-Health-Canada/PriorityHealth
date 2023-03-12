// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();


app.get('/', (req, res) => {
    //res.redirect("/views/metricForm");
    res.sendFile(__dirname + '/views/metricForm.ejs');
    //res.send('Priority Based Family Physician Access');
 });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});