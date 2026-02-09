import express from "express";
import router from "./routes/product.route.js";
import dotenv from "dotenv"
import connectDB from "./config/db.js"


const app = express();

dotenv.config();
connectDB();

app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send("List API is running");
// })


app.use("/api", router);

export default app;