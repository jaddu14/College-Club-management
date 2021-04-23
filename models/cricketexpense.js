const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema(
  {
    Name: {
      type: String,
    },
    Amount: {
      type: Number,
    },
    Type: {
      type: String,
    },
  },
  { timestamps: true }
);

const cricketexpense = mongoose.model("cricketexpense", expenseSchema);
module.exports = cricketexpense;
