const book=require('../models/book')

const createbook=async(req,res)=>{
    try{
        const boo= await book.create(req.body)
        res.status(201).json(boo)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports=createbook