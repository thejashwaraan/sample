const express=require('express')
const login=require('../controllers/usercontroller')
const register=require('../controllers/usercontroller')
const router=express.Router()


router.post('/login',login)
router.post('/register',register)

module.exports=router