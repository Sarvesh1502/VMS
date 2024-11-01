const mongoose=require("mongoose");
const required = require("required");
const connect=mongoose.connect("mongodb://localhost:27017/Login");

connect.then(()=>{
    console.log("Database connected");
})
.catch(()=>{
    console.log("Not connected");
});

const Loginschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const collection=new mongoose.model("Students",Loginschema);

module.exports=collection;