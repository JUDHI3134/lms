import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";
import educatorRouter from "./routes/educatorRoutes.js";
import { clerkMiddleware } from "@clerk/express";
import connectCloudinary from "./configs/cloudinary.js";
import courseRouter from "./routes/courseRoute.js";

//initialized express
const app = express();

//connect to database
await connectDB();
await connectCloudinary()

//middleware
app.use(cors())
app.use(clerkMiddleware())


//route
app.get("/", (req, res) => {
    res.send("Api Working")
})
app.post("/clerk", express.json(), clerkWebhooks)
app.use("/api/educator", express.json(), educatorRouter)
app.use("/api/course", express.json(), courseRouter)


//port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})