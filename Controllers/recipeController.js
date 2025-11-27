import Recipe from "../Models/recipeSchema.js";


//create recipes

export const createRecipe = async(req,res)=>{
    try{
      const { recipeName, procedure, duration } = req.body;
       const newRecipe = await Recipe.create({
      recipeName,
      procedure,
      duration
    });
    res.status(201).json({
      message: "Recipe created successfully",
      data: newRecipe
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get All Recipes

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json({
      count: recipes.length,
      data: recipes
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Recipe By ID
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update Recipe
export const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json({
      message: "Recipe updated successfully",
      data: updatedRecipe
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Recipe
export const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};