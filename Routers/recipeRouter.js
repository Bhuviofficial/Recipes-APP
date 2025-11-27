import express from "express";
import{
     createRecipe,
     getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
} from "../Controllers/recipeController.js";


const router = express.Router();



 router.post("/create", createRecipe);
 router.get("/all", getAllRecipes); 
router.get("/:id", getRecipeById);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;