const student=require('../models/student')

const createstudent=async(req,res)=>{
    try{
    const stu=await student.create(req.body);//insert a new document into a collection
    res.status(201).json(stu)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}
const getallstudents=async(req,res)=>{
    try{
      const students=await student.find()
      res.status(200).json(students)
    }catch(err){
        res.status(500).json(err)
    }
}
const updatestudent=async (req,res)=>{
    const studentid=req.params.id
    try{ 
    await student.findByIdAndUpdate(studentid,req.body)
    const updatestud=await student.findById(studentid)
    res.status(200).json(updatestud)
}catch(err){
    res.status(500).json(err)

}}

const deletestudentbyid=async(req,res)=>{
     const studentid=req.params.id
     try{
          await student.deleteOne({_id:studentid})
         res.status(200).json({"message":"deleted successfully.."})
     }catch(err){
         res.status(500).json(err)
     }
 }

module.exports=createstudent
module.exports=getallstudents
module.exports=updatestudent
module.exports=deletestudentbyid