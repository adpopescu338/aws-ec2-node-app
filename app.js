const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// serve static files from the public folder
app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Node app listening on port ${port}!`);
});
