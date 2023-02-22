const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// serve static files from the public folder
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
