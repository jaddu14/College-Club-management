const { response } = require('express')
const member = require('../models/member')

const index  = (req,res,next) =>{
    member.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occoured'
        })
    })
}
const show = (req,res,next)=>{
    let memberid=req.body.memberid
    member.findById(memberid)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error occoured'
        })
    })
}
const store =(req,res,next) =>{
    let Member = new member({
        Name:req.body.Name,
        Surname:req.body.Surname,
        Email:req.body.Email,
        Password:req.body.Password,
        Sic:req.body.Sic,
        Branch:req.body.Branch
    })
    if(req.file){
        member.avatar = req.file.path
    }
    Member.save()
    .then(response =>{
        res.json({
            message: 'member added successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error occoured'
        })
    })
}

const update = (req,res,next)=>{
    let memberid = req.body.memberid
    let updateData = {
        Name:req.body.Name,
        Surname:req.body.Surname,
        Email:req.body.Email,
        Password:req.body.Password,
        Sic:req.body.Sic,
        Branch:req.body.Branch
    }
    member.findByIdAndUpdate(memberid, {$set: updateData})
    .then(() =>{
        res.json({
            message: 'member updated successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error occoured'
        })
    })
}
const destroy = (req,res,next)=>{
    let memberid = req.body.memberid
    member.findByIdAndRemove(memberid)
    .then(() =>{
        res.json({
            message:'member deleted'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error occoured'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}