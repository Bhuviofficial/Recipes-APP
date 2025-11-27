import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
 recipeName: { type: String, required: true },
    procedure: { type: String, required: true },
    duration: { type: String, required: true }
},
{ timestamps: true }
);

const recipes = mongoose.model("Recipe",recipeSchema);
export default recipes;
