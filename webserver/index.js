const express = require("express");

const PORT = process.env.PORT || 8008;

const app = express();
var jsonFile = require("./data.json"); // path of your json file

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
  // res.json(jsonFile);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
