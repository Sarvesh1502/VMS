const express=require("express");
const pasth=require("path");
const bcrypt=require("bcrypt");
const collection=require("./config")

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('view engine','ejs');
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("login");
});

app.get("/signup",(req,res)=>{
    res.render("signup");
});
app.post("/signup",async(req,res)=>{
    const data={
        name:req.body.username,
        srn:req.body.srn,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        email:req.body.email,
        branch:req.body.branch,
        year:req.body.year,
        semester:req.body.semester,


    }
    const existinguser=await collection.findOne({name:data.name});
    if(existinguser){
        res.send("User already exsits.Please choose a different username"); 
    }else{
        const saltRounds=10;
        const hashedpassword= await bcrypt.hash(data.password,saltRounds);

        data.password=hashedpassword;
        const userdata= await collection.insertMany(data);
        console.log(userdata);

    }
    
})
app.post("/login",async(req,res)=>{
    try{
        const check= await collection.findOne({name:req.body.username});
        if(!check){
            res.send("User name not found");
        }
        const ispasswordmatch=await bcrypt.compare(req.body.password,check.password);
        if(ispasswordmatch){
            res.render("home");

        }else{
            res.send("incorrect password");
        }
    }catch{
        res.send("Wrong details");
    }
});
const port=5002;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})