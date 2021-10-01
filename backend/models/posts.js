const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  //postSchema is the name of the Schema
  equipmentName: {
    type: String,
    required: true,
  },
  supplyCompany: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  priceIndollars: {
    type: Number,
    required: true,
  },
  ageInyears: {
    type: Number,
    required: true, //backend form validation to make sure that ageInyears field is filled in
  },
  description: {
    type: String,
    required: false, //description is not a valid field
  },
  employeeNIC: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Posts', postSchema);
