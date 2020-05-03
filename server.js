const express = require("express");
const recipes = require("./recipes/recipe-model");
const server = express();

server.use(express.json());

server.use((err, req, res, next) => {
  res.status(500).json({
    message: "ERROR",
  });
});

server.get("/", (req, res, next) => {
  res.json({
    message: "ayyyyy",
  });
});

server.get("/recipes", async (req, res, next) => {
  try {
    const recipeList = await recipes.getRecipes();
    res.json(recipeList);
  } catch (err) {
    next(err);
  }
});

server.get("/recipes/:id", async (req, res, next) => {
  try {
    const list = await recipes.getShoppingList(req.params.id);
    if (list === null) {
      res.status(404).json({
        message: "cannot retrieve ",
      });
    }
    res.json(list);
  } catch (err) {
    next(err);
  }
});
server.get("/recipes/:id/instructions", async (req, res, next) => {
  try {
    const list = await recipes.getInstructions(req.params.id);
    if (!list) {
      res.status(404).json({
        message: "cannot retrieve ",
      });
    }
    res.json(list);
  } catch (err) {
    next(err);
  }
});

module.exports = server;
