const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const server = require("http").Server(app);

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("index", { roomId: req.param.room });
});

let PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
