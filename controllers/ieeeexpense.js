const { response } = require("express");
const expense = require("../models/ieeeexpense");

const show = (req, res, next) => {
  expense
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
  let Expense = new expense({
    Name: req.body.Name,
    Amount: req.body.Amount,
    Type: req.body.Type,
    Date: req.body.Date,
  });
  Expense.save()
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
  expense
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
