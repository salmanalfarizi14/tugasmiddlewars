const userModel = require ('../models/user-models')

const getUser = (req,res)=>{
    try {
        const user = userModel.getUser();
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        
    }
}

const getUseByIndex=(req,res)=>{
    try {
        const user = userModel.getUseByIndex(req.params.id)
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        
    }
}

module.exports ={getUser,getUseByIndex}