import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import recipeRouter from "./Routers/recipeRouter.js";
import cors from "cors";



//dotenv config
dotenv.config();

//express intialisation
const app = express();

//middlewares

app.use(cors());
app.use(express.json());

//database connection

connectDB();

// default route
app.use("/api/recipes", recipeRouter);

app.get("/", (req, res) => {
  res.send("Recipes API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



