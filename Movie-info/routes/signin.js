const express=require('express')
const model =require('../models/model')
const route =express.Router()


route.get('',(req,res)=>{
    res.render('signin')
});


route.post('',async(req,res)=>{
    const obj=await model.find({email:req.body.email})
    if(obj.length===0){
    const person=new model({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        location:req.body.location,
        dob:req.body.dob
    })
    person.save()
    .then(result=>{
        res.status(200).redirect('/')
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
    }else{
        res.render('enter',{msg:"User already exists"})
    }     
});

module.exports=route