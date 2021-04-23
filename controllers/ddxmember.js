const { response } = require('express')
const member = require('../models/ddxmember')
const nodemailer = require('nodemailer');

const show = (req,res,next)=>{
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

const add  =(req,res,next) =>{
    let EmailId = req.body.Email;
    // let clubName = req.body.Club;
    console.log(`${EmailId}`);
    let transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'sawshubham0818@outlook.com', // generated ethereal user
          pass: 'Prince@14'  // generated ethereal password
      },
      tls:{
        rejectUnauthorized:true
      }
    });
    
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <sawshubham0818@outlook.com>', // sender address
        to: EmailId, // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: ' You Just Got Registered for DDX Club.', // plain text body
        // text: `you have been added to ${clubName}.`, 
        // html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(`Message sent to ${EmailId}: %s`, info.messageId);   
    });
    let Member = new member({
        Name:req.body.Name,
        Sic:req.body.Sic,
        Branch:req.body.Branch,
        Contact:req.body.Contact,
        Email:req.body.Email
    })
    Member.save()
    .then(response =>{
        res.json({
            message: 'Added successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error occoured'
        })
    })
}
const destroy = (req,res,next)=>{
    let sic = req.body.Sic
    member.findOneAndDelete( {Sic : sic} )
    .then((response) =>{   
        if(response){
            res.json({
                message : 'member deleted'
                })
        } 
        else{
            res.json({
                message : 'member not found'
                    })
        }
        }) 
        .catch(error =>{
            res.json({
                message : 'An error occoured'
            })
        })
    }
module.exports = {show, add, destroy}