const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  console.log("Api works. Hello World!");
  res.send("Hello World!");
});

app.get("/hello/:name", (req, res) => {
  console.log("Api works. Hello World!");
  res.send(`Hello ${req.params.name}!`);
});

// serve static files from the public folder
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
