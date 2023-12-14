const express = require("express");
const app = express();
const port = 8000;

var methodOverride = require('method-override')
app.use(methodOverride('_method')) //for override post request into some other request
const { v4: uuidv4 } = require('uuid');
uuidv4(); //for genrate random id
app.use(express.urlencoded({ extended: true })); // Fix: Add parentheses and pass an object

app.set("view engine", "ejs");

let jsonData = require('./database.js')//require data from anther file
let data  = jsonData.data;

app.use(express.static('public'));//use css file and telling the express
//we profom crud opertion (creat,read,update,delte)

//Get start with APIs
app.listen(port, () => {
    console.log("Your port is listening now at", port);
});
//resource
app.get("/posts", (req, res) => {
    res.render("index.ejs", { data });  //All posts
});
//1 creat 
app.get("/posts/new", (req, res) => {  //creat new post
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {  //when we submit new post then we reaced this path
    let { username, content } = req.body; 
    let id = uuidv4()        //atomatically assigne uniqu id form this function
    let newData = {id,username, content}
    data.push(newData)
    res.redirect("/posts");  //redirect to All posts
});
//2 read 
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = data.find((p)=> id === p.id)//access specific post
    res.render("details.ejs" , {post})
    console.log(post)
})

//3 update
app.get("/posts/:id/edit", (req, res) => {  //go to edit or update file
    let {id} = req.params;
    let post = data.find((p)=> id === p.id)
    res.render("update.ejs",{post});
});
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;  //when submit update file 
    let post = data.find((p)=> id === p.id)
    post.content = newContent
    res.redirect("/posts")  // redirect to all Posts
})

//4 delete
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    data = data.filter((p) => id !== p.id);//The filter method creates a new array that includes only the posts where the condition is true
    res.redirect("/posts"); // Redirect to all posts
});

