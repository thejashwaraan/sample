const express=require('express')
const createBlog=require('../controllers/blogcontroller')
const authorizeMiddleware=require('../middleware/auth')
const routes=express.Router()

roustes.post('/',authorizeMiddleware,createBlog)

module.exports=routes

//blog routes