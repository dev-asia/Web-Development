let express = require("express");
let app = express()


let port = 8808;

app.listen(port,()=>{
    console.log("Now the request is listen now")
 })

app.set("view engine","ejs")  //first Step of EJS

// for dice.ejs  file
// app.get("/dice",(req,res)=>{
//     let data = Math.floor(Math.random()*6)+1;//If we want execute data here and print into html
//     res.render("dice.ejs",{key:data})//second and third Step
// })

//for instgram.ejs file
let followers = ["asia","amna","arooj","attika"]
app.get("/Ig/:username",(req,res)=>{
    let {username} = req.params;
    res.render("instgram.ejs",{username,followers})  //short key object
})











//1: EJS   (sending a file/temlets)
//agr hum ny response ma koi file send krni ho to osy hum EJS ki madat sy
//krty hy
//EJS ik package hy jo express ky ander hi require ho jata hy humy alg sy install ni krna prta
//Step By Step   
//first we set EJS in Js
//Second we make a folder and into folder we make a file of file.ejs where we write our code
//Third we render our response instead of send
 


//2: agr hum parent folder sy excute krty hy to es ka path set krna partha hy

//3: agr hum chaty ho ky ky hamra data JawaSrcipt sy html
//ma jaye to hum 
//render function ky saat dosra argument lety hy jo ek 
//object hy 
//or os object ki Key ky ander sara data store kr dety hy
//phir wo Key html ko dy dety hy

