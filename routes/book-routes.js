const express=require('express')
const createbook=require('../controllers/bookcontroller')
const routers=express.Router()

routers.post('/',createbook)
module.exports=routers