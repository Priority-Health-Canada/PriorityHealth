// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();


app.get('/', (req, res) => {
    res.send('PDP') 
 });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});