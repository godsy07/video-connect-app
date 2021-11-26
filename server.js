const express = require("express");

const app = express();
const server = require("http").Server(app);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

let PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
