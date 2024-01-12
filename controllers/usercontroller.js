const user=require('../models/user')
const jwt=require('jsonwebtoken')
const register=async(req,res)=>{
    const user=req.body
    try{
        const createdUser=await user.create(user)
        res.status(200).json(createdUser)
    }catch(error){
        console.log(error)
        res.status(500).json({'message':error.message})
    }
}

const log=async (req,res)=>{
    const{email,password}=req.body
    try{
        const validuser=await user.findOne({'email':email,'password':password})
        if(!validuser) res.status(401).json({'msg':'Invalid email/password'})
    else{
//generate json web token
        const token=jwt.sign({validuser},'SECRETCODE',{expiresIn:"1800s"})
        console.log(token)
        res.status(200).json(token)
    }
    }
    catch(err)
    {
        res.status(500).json(err)
    }
    }
