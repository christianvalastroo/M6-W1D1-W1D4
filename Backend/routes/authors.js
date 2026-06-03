const express = require("express")
const Author = require("../models/Author")

const authorsRouter = express.Router()

authorsRouter.get("/", async (req, res) => {
    try {
        const authors = await Author.find()

        res.status(200).send(authors)
    } catch (error) {
        res.status(500).send({
            message: "Errore nel recupero degli autori"
        })
    }
})

module.exports = authorsRouter