const mongoose=require('mongoose')
const user = require('./user')
const BlogSchema=new mongoose.Schema({
    'title':{required:true,type:String},
    'content':{required:true,typre:String},
    'author':{type:mongoose.Schema.Types.ObjectId,ref:user,required:true},
    "createAt":Date.now

})
module.exports=mongoose.model('blog',BlogSchema)