const express = require("express");
const app = express();

let port = 8084;
let database = require("./data.json")


app.listen(port,()=>{
  console.log( `Your's port is listening now ${port}`);  
})

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.send("your request is send in the root path")
})
app.get("/:name",(req,res)=>{
    let {name} = req.params;
    let data = database[name];

    if(data){ 
        res.render("insta.ejs",{data}) 
    }else{
        res.render("error.ejs")
    }
})
















//Es Project ky ander hum sekhy gy kasy hum 
//database sy data nikal/fetch kr ky apny temlets ky
//ander istamal kr skty hy