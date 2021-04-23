const { response } = require("express");
const cricketexpense = require("../models/cricketexpense");

const show = (req, res, next) => {
  cricketexpense
    .find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occoured",
      });
    });
};

const credit = (req, res, next) => {
  let CricketExpense = new cricketexpense({
    Name: req.body.Name,
    Amount: req.body.Amount,
    Type: req.body.Type,
    Date: req.body.Date,
  });
  CricketExpense.save()
    .then((response) => {
      res.json({
        message: "Transaction added successfully",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occoured",
      });
    });
};
const destroy = (req, res, next) => {
  let name = req.body.Name;
  cricketexpense
    .findOneAndDelete({ Name: name })
    .then((response) => {
      if (response) {
        res.json({
          message: "Transaction deleted",
        });
      } else {
        res.json({
          message: "Transaction not found",
        });
      }
    })
    .catch((error) => {
      res.json({
        message: "An error occoured",
      });
    });
};

module.exports = { credit, show, destroy };
