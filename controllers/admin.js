const Admin = require('../models/admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            })
        }
        let admin = new Admin({
            username: req.body.username,
            password: hashedPass,
            clubname: req.body.clubname
        })
        admin.save()
        .then(user =>{
            res.json({
                message: 'User added successfully!'
            })
        })
        .catch(error =>{
            res.json({
                message: 'An error occured!'
            })
        })
    })
}

const login = (req, res, next) =>{
    var username = req.body.username
    var password = req.body.password
    var clubname = req.body.clubname

    Admin.findOne({$or: [{username: username}]})
    .then(user =>{
        if(user){
            bcrypt.compare(password,user.password,function(err, result){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({username: user.username}, 'AzQ,PI)0(')
                    res.json({
                        message: 'Login successful',
                        token, user
                    })
                }else{
                    res.json({
                        message: 'Password does not match'
                    })
                }
            })
        }else{
            res.json({
                message: 'No user found'
            })
        }
    })
}

module.exports ={
    register, login
}
