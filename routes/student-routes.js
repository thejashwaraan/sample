const express=require('express')
const createstudent=require('../controllers/studentcontroller')
const getallstudents=require('../controllers/studentcontroller')
const updatestudent=require('../controllers/studentcontroller') 
const deletestudentbyid=require("../controllers/studentcontroller")
const authorizeMiddleware=require('../middleware/auth')
const router=express.Router()

router.post('/',authorizeMiddleware,createstudent)
router.get('/',getallstudents)
router.put('/:id',updatestudent)
 router.delete('/:id',deletestudentbyid)
module.exports=router