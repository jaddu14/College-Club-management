const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');


//admin
const adminRoutes = require("./routes/auth");

//club_expense
//const memberRoutes = require('./routes/member')
//const AuthRoutes = require('./routes/auth')
//const ExpenseRoutes  = require('./routes/expense')
const MusicExpenseRoutes = require("./routes/musicexpense");
const CricketExpenseRoutes = require("./routes/cricketexpense");
const RoboticsExpenseRoutes = require("./routes/roboticsexpense");
const badmintonexpenseRoutes = require("./routes/badmintonexpense");
const basketballexpenseRoutes = require("./routes/basketballexpense");
const ieeeexpenseRoutes = require("./routes/ieeeexpense");
const ddxexpenseRoutes = require("./routes/ddxexpense");
const greenexpenseRoutes = require("./routes/greenexpense");
const photographyexpenseRoutes = require("./routes/photographyexpense");
const scholarexpenseRoutes = require("./routes/scholarexpense");
const TheatreexpenseRoutes = require("./routes/theatreexpense");
const TedxexpenseRoutes = require("./routes/tedxexpense");

//club_member
const BadmintonmemberRoutes = require("./routes/badmintonmember");
const BasketballmemberRoutes = require("./routes/basketballmember");
const CricketmemberRoutes = require("./routes/cricketmember");
const DdxmemberRoutes = require("./routes/ddxmember");
const GreenmemberRoutes = require("./routes/greenmember");
const IeeememberRoutes = require("./routes/ieeemember");
const MusicmemberRoutes = require("./routes/musicmember");
const PhotographymemberRoutes = require("./routes/photographymember");
const RoboticsmemberRoutes = require("./routes/roboticsmember");
const ScholarmemberRoutes = require("./routes/scholarmember");
const TheatrememberRoutes = require("./routes/theatremember");
const TedxmemberRoutes = require("./routes/tedxmember");

mongoose.connect(
  "mongodb+srv://chinmay:chinmay1@cluster0.rleec.mongodb.net/testdb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection Established!");
});

const app = express();

// View engine setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

var cors = require("cors");
app.use(cors());
app.use(morgan("dev"));


//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/uploads", express.static("uploads"));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});


// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("Hello to the server");
});

app.locals.layout = false;
// app.post('/api/greenmember/add',(req,res)=>{
//   const EmailId = req.body.email;
//   // res.send(`hello ${EmailId}`);
// // app.post('/send', (req, res) => {
// //   const output = `
// //   <p>You have a new contact request</p>
// //   <h3>Contact Details</h3>
// //   <ul>  
// //     <li>Name: ${req.body.name}</li>
// //     <li>Company: ${req.body.company}</li>
// //     <li>Email: ${req.body.email}</li>
// //     <li>Phone: ${req.body.phone}</li>
// //   </ul>
// //   <h3>Message</h3>
// //   <p>${req.body.message}</p>
// // `;

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'smtp-mail.outlook.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'sawshubham0818@outlook.com', // generated ethereal user
//         pass: 'Prince@14'  // generated ethereal password
//     },
//     tls:{
//       rejectUnauthorized:true
//     }
//   });
  
//   // setup email data with unicode symbols
//   let mailOptions = {
//       from: '"Nodemailer Contact" <sawshubham0818@outlook.com>', // sender address
//       to: EmailId, // list of receivers
//       subject: 'Node Contact Request', // Subject line
//       text: 'fuck you guy you just got registered', // plain text body
//       // html: output // html body
//   };

//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log(`Message sent to ${EmailId}: %s`, info.messageId);   
//   });
// });

//admin
app.use("/api/admin", adminRoutes);

//club_expense

//app.use('/api/member', memberRoutes)
//app.use('/api/', AuthRoutes)
//app.use('/api/expense', ExpenseRoutes)
app.use("/api/musicexpense", MusicExpenseRoutes);
app.use("/api/cricketexpense", CricketExpenseRoutes);
app.use("/api/roboticsexpense", RoboticsExpenseRoutes);
app.use("/api/badmintonexpense", badmintonexpenseRoutes);
app.use("/api/basketballexpense", basketballexpenseRoutes);
app.use("/api/ieeeexpense", ieeeexpenseRoutes);
app.use("/api/ddxexpense", ddxexpenseRoutes);
app.use("/api/greenexpense", greenexpenseRoutes);
app.use("/api/scholarexpense", scholarexpenseRoutes);
app.use("/api/photographyexpense", photographyexpenseRoutes);
app.use("/api/theatreexpense", TheatreexpenseRoutes);
app.use("/api/tedxexpense", TedxexpenseRoutes);

//club_members
app.use("/api/badmintonmember", BadmintonmemberRoutes);
app.use("/api/basketballmember", BasketballmemberRoutes);
app.use("/api/cricketmember", CricketmemberRoutes);
app.use("/api/ddxmember", DdxmemberRoutes);
app.use("/api/greenmember", GreenmemberRoutes);
app.use("/api/ieeemember", IeeememberRoutes);
app.use("/api/musicmember", MusicmemberRoutes);
app.use("/api/photographymember", PhotographymemberRoutes);
app.use("/api/roboticsmember", RoboticsmemberRoutes);
app.use("/api/scholarmember", ScholarmemberRoutes);
app.use("/api/theatremember", TheatrememberRoutes);
app.use("/api/tedxmember", TedxmemberRoutes);
