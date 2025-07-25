import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
import cors from "cors"
import router from "./routes/index.js"

const app = express()

app.use(express.json())

dotenv.config()

app.use(cors({
    origin : "https://frontend-phi-three-18.vercel.app",
    credentials : true
}))

app.use("/api",router)

// demo api

app.get("/", (req, res) => {
    res.status(200).json({
        error : false,
        success : true,
        message : "Welcome"
    })
})

const PORT = process.env.PORT || 5000

connectDb()

app.listen(PORT, () => {
    console.log("Server is running at : ",PORT)
})