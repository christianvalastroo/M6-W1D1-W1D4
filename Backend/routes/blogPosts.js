const express = require("express")
const BlogPost = require("../models/BlogPost")

const blogPostsRouter = express.Router()

// GET tutti i blog post
blogPostsRouter.get("/", async (req, res) => {
    try {
        const blogPosts = await BlogPost.find().populate("autore")

        res.status(200).json({
            statusCode: 200,
            message: "OK",
            data: blogPosts
        })

    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Internal Server Error"
        })
    }
})

// POST crea blog post
blogPostsRouter.post("/", async (req, res) => {
    try {
        const newBlogPost = new BlogPost(req.body)

        const savedBlogPost = await newBlogPost.save()

        res.status(201).json({
            statusCode: 201,
            message: "Created",
            data: savedBlogPost
        })

    } catch (error) {
        res.status(400).json({
            statusCode: 400,
            message: "Bad Request"
        })
    }
})

module.exports = blogPostsRouter