const User = require('../models/admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            })
        }
        let user = new User({
            Username: req.body.username,
            Password: hashedPass,
            Clubname: req.body.clubname
        })
        user.save()
        .then(user =>{
            res.json({
                message: 'Admin added successfully!'
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
    var Username = req.body.username
    var Password = req.body.password
    var Clubname = req.body.clubname

    User.findOne({$or: [{username: Username}]})
    .then(user =>{
        if(user){
            bcrypt.compare(password,user.Password,function(err, result){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({sername: user.username}, 'AzQ,PI)0(')
                    res.json({
                        message: 'Login successful',
                        token
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
