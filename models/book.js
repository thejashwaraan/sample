const mongoose=require('mongoose')
const bookSchema=new mongoose.Schema({
    "title":String,
    "price":Number,
    "author":String
})

module.exports=mongoose.model('book',bookSchema)