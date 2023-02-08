const express = require("express");
const birdRouter = express.Router();

const birds = [
  { name: "bird1", species: "parthenogenesis" },
  { name: "bird2", species: "brant" },
];
//// define the home page route
birdRouter.get("/", (req, res) => {
  res.send(birds);
});
//// define the about route
birdRouter.get("/about", (req, res) => {
  res.send("About birds");
});

birdRouter.post("/add-birds", (req, res) => {
  res.send("Added a bird");
});

module.exports = birdRouter;
