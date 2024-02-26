const {Chat} = require("./model/schema.js")

const mongoose = require("mongoose");

main().then((res)=>{
    console.log("Congratulation connection is sueccful!")
}).catch((err)=>{
    console.log("please check your mongoose connection!")
});
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wathsapp');
};


let allChats =[
    {
     from:"asia",
     to:"arooj",
     msg:"This is over first msg",
     date: new Date()
     },
     {
        from:"aml",
        to:"sana",
        msg:"What is your real problem",
        date: new Date()
        },
        {
            from:"Aulakh",
            to:"ayesha",
            msg:"Please send me your resuma",
            date: new Date()
            },
]
Chat.insertMany(allChats).then((res)=>{
    console.log(res)

}).catch((err)=>{
    console.log(err)
})
