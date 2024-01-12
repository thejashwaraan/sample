const blog=require('../models/blog')
const createBlog=async(req,req)=>{
    const blog=req.body
    const user=req.user
    console.log(user)
    try{
        const userId=await user.findone({'email':user.email})
        blog.author=userId._id
        const createdNlog=await blog.create(blog)
        res.status(200).json(createdblog)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}