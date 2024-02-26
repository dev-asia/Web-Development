const express = require('express')
const app = express()
const path = require('path');
const methodOverride = require('method-override')
const ejs = require('ejs')
const port = 8080;

app.set('view engine', 'ejs');//for ejs templeting
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// getting-started.js
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { decode } = require('punycode');

main()
.then(res=>{ console.log("congrulation! ")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/college');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//Create a schema
let schema = mongoose.Schema({
   name: {
      type:String
    },
    age: {
      type:String
    },
    marks: {
      type:Number,
      min:[33,"sorry you'r are fail"]
    }
  }, { timestamps: true });
let Data = mongoose.model("Data",schema)
//insert Data
// Data.insertMany(
//     [{name:"arooj",age:20,marks:45},
//     {name:"amna",age:19,marks:47},
//     {name:"attika",age:23,marks:40}])
// .then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })
//Get start with rout handler
app.get("/",(req,res)=>{
  res.send("congratulation you'r connection is succfull")
})

//1:Index rout View all data 
app.get("/students",async(req,res)=>{
    let clg_date = await Data.find();
    res.render("index",{clg_date})
})
//2:Added new date 
app.get("/students/add",(req,res)=>{
    res.render("new")
})
app.post("/students/add",(req,res)=>{
  let {name,age,marks} = req.body;
 let newDate = new Data({
  name: name,
  age: age,
  marks: marks
 })
newDate.save()
res.redirect("/students")
})
//3: Update rout
app.get("/students/edit/:id",async(req, res) => {
  let {id}= req.params;
  let stud = await Data.findById(id);
  res.render("edit", {stud});
});

app.put("/students/:id",async(req,res)=>{
  let {id} = req.params;
  let {name,new_marks} = req.body;
  await  Data.findOneAndUpdate({_id:id,name:name},{marks:new_marks},{new:true})
  .then(results=>{
    if(!results){
      res.send("Date not found")
    }else{
      res.redirect("/students")
    }
  }).catch(err=>{
    console.log(err)
    res.status(500).json({ error: 'Internal server error' });
  })
})
//4:Delete
app.get("/students/delete/:id",async(req,res)=>{
  let {id,name} = req.params;
  let student = await Data.findById(id);
  res.render("delete",{student})
})

app.delete("/students/:id",async(req,res)=>{
  let {id} = req.params;
  let {name} = req.body;
  await Data.findOneAndDelete({_id:id,name:name})
  .then(result=>{
    if(!result){
      res.send("Please write corect name")
    }else{
      res.redirect("/students")
    }
  }).catch(err=>{
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  })
  
})


app.listen(port,(req,res)=>{
    console.log("you'r port is listening now")
})

