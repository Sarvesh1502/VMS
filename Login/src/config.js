/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const mongoose=require("mongoose");
const required = require("required");
const connect=mongoose.connect("mongodb://localhost:27017/Login");

connect.then(()=>{
    console.log("Database connected");
})
.catch(()=>{
    console.log("Not connected");
});

const studentSchema=new mongoose.Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    email: { type: String, unique: true, required: true },
    srn: { type: String, unique: true, required: true },
    semester: { type: String, required: true },
    year: { type: String, required: true },
    branch: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema, "students");

module.exports = { Student };