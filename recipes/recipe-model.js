const db = require("../data/config");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("ingredients as i")
    .join("recipes as r", "r.id", "i.id")
    .select(["i.ingredient_quantity", "i.ingredient_name"])
    .where("i.id", id);
}

function getInstructions(id){
    return db("recipes as r")
    .join("instructions as i","i.id","r.id")
    .join("recipe_instructions as ri","r.id","ri.recipe_id")
    .select(["i.step","i.step_number"])
    .where("ri.recipe_id",id)
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
