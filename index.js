const express = require("express");
const usersRouter = require("./users");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

// middleware
app.use((req, res, next) => {
  console.log("HELLOOOO, THIS IS A MIDDLEWARE");
  next();
});

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Homepage nih bos"
  });
});

app.get("/about", (req, res) => {
  res.redirect("/users");
});

app.get("/api", (req, res) => {
  res.json({
    id: 1,
    name: "John Doe"
  });
});

app.use(usersRouter);

app.listen(PORT, () => console.log(`Port: ${PORT}`));