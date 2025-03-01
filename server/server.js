import express from "express"
import cors from "cors"
import "dotenv/config"

//initialized express
const app = express();

//middleware
app.use(cors())

//route
app.get("/", (req, res) => {
    res.send("Api Working")
})

//port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})