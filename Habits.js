const { time } = require("console");
const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema({
  wTime: {
    Mon: { Start: { type: String, requried: true, }, End: { type: String, requried: true, }, Work: { type: Boolean, requried: true, } },
    Tue: { Start: { type: String, requried: true, }, End: { type: String, requried: true, }, Work: { type: Boolean, requried: true, } },
    Wed: { Start: { type: String, requried: true, }, End: { type: String, requried: true, }, Work: { type: Boolean, requried: true, } },
    Thu: { Start: { type: String, requried: true, }, End: { type: String, requried: true, }, Work: { type: Boolean, requried: true, } },
    Fri: { Start: { type: String, requried: true, }, End: { type: String, requried: true, }, Work: { type: Boolean, requried: true, } },
    Sat: { Start: { type: String, requried: true, }, End: { type: String, requried: true, }, Work: { type: Boolean, requried: true, } },
    Sun: { Start: { type: String, requried: true, }, End: { type: String, requried: true, }, Work: { type: Boolean, requried: true, } },
  },




  rAppW: {
    Mon: { RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
    Tue: {  RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
    Wed: { RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
    Thu: {  RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
    Fri: {  RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
    Sat: {  RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
    Sun: {  RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
  },

  rAppNW: {
    Mon: { RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
    Tue: {  RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
    Wed: { RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
    Thu: {  RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
    Fri: {  RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
    Sat: {  RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },
    Sun: {  RA: { type: [mongoose.Schema.Types.Mixed], requried: true } },

  },


});



const Employee = mongoose.model("Employee", EmpSchema);
module.exports = Employee;
