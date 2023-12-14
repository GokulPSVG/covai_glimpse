const express=require('express')
const router= express.Router()
const User=require('../models/SignModel.cjs')

router.post('/signup',(req,res)=>{
    const signedupUser=new User({
        name:req.body.name,
        password:req.body.password,
        mobileNumber:req.body.mobileNumber
    })
    signedupUser.save()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json(err)
        })
})
router.get('/user',async (req,res)=>{
    try{
    const users = await User.find({});
    res.send({data:users})
    }
    catch(err){
        console.log(err)
    }
})

module.exports=router