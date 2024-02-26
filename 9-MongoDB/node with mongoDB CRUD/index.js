const express = require("express");
const app = express();
const port = 3000;

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
 // Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory 
app.use(express.static('public'));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//require data from other file
let {Chat} = require("./model/schema.js")

//require mongoose
const mongoose = require("mongoose");
//Set connections of mongoose
main().then((res)=>{
    console.log("Congratulation connection is sueccful!")
}).catch((err)=>{
    console.log("please check your mongoose connection!")
});
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wathsapp');
};

//Use MongoDB with express now
//Routing part is start 
// home rout
app.get("/",(req,res)=>{
    res.send("Congrulation! you'r connection is sueccful!")
})
//0:index rout
app.get("/chats", async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats)
    res.render('index',{chats})
})

//1: Create new chats
app.get("/chats/new",(req,res)=>{
    res.render('new')
})
app.post("/chats",(req,res)=>{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from:from,
        msg:msg,
        to:to,
        date:new Date()
    })
    newChat.save();
    res.redirect("/chats")
})
// Edit rout
app.get("/chats/edit/:id", async(req, res) => {
    let { id } = req.params;
     let data = await Chat.findById(id)
     console.log(data)
     res.render("edit",{data})
})
app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let {new_msg} = req.body;
    await Chat.findByIdAndUpdate(id,{msg:new_msg,date:Date()},{new:true})
    res.redirect("/chats")
})
//Delete
app.get("/chats/delete/:id",async(req,res)=>{
    let {id} = req.params;
    await Chat.findByIdAndDelete(id)
    res.redirect("/chats")
})
app.listen(port,()=>{
    console.log("The port is start");
});
//end
