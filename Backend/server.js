const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.on("connected", () => {
    console.log("MongoDB collegato 🚀")
})

mongoose.connection.on("error", (error) => {
    console.log("Errore MongoDB:", error)
})

app.get("/", (req, res) => {
    res.send("Server Strive Blog online 🚀")
})

app.listen(PORT, () => {
    console.log("Server attivo sulla porta " + PORT)
})