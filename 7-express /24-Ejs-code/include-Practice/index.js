let express = require("express");
let app = express();
let port =  8080;

app.listen(port,()=>{
    console.log("Port is listening now",port)
})

app.set("view engine","ejs")

app.get("/page",(req,res)=>{
 
    res.render("page2.ejs")

})


//agr humy HTML ka kuch code/part alag alag jagha 
//use krna ho to hum osy ik folder ky ander files bna os ka templets banty hy
//phir jis jagha ost istamal krna ho to sirf osy 
//includes krty hy using:
//<%- include("includes/templates.ejs"); %>