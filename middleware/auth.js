const jwt=require('jsonwebtoken')
const authMiddleware=async(req,res,next)=>{
    const authHeader=req.headers.authorization
//if there is no token
//there is a token, bt it doesnt starts with bearer
if(!authHeeader||!authHeader.startsWith('Bearer')){
    throw new Error('Not Authorized',401)
}
//take the payload which constains the data
const token=authHeader.split(' ')[1]
console.log(token)
try{
    const decoded =jwt.verify(token,'thisismysecretkey')
    //fetch the user details
    const{email,username,role}=decoded
    req.user={email,username,role}
    next()
}catch(err){
    console.log(err)
    throw new Error('Not a valid token',401)
}
}