const UserLogger =(req,res,next)=>{
    const d = new Date ().tolSOString()
    console.log(`${d} ${req,method}${req,originalurl}`);
    

}

module.exports ={UserLogger}