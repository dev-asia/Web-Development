fconst mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("Congratulations!");
    })
    .catch((err) => {
        console.log(`Please try again`);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Create a schema
const userSchema = new mongoose.Schema({
    name: String, //apply single constrain method   
    age: Number,
    email: String
});
//Constrain/rules of enter values
const useSchema = new mongoose.Schema({
    //if we apply multipul constrain into single value
    name: {
        type:String,
        required:true //mean not null value
    }, 
    age: {
        type:Number,
        min:[16,"must be greater then 16 year old, got  age {VALUE} "]//min mean value must be 16 or greater then 16 if the value is less then 16 then this messege is show
    },
    email:{
        type:String,
        default:"user@gmail.com",//set default value
        enum: ['aulakhgmai.com', 'asiagmial.com'],//email shoud be one of these
    } 
});

// Create a collection/table with schema
const User = mongoose.model("User", userSchema);

// Insert one  1
// const user1 = new User({
//     name: "asia",
//     age: 21,
//     email: "asia@gmail.com"
// });
// user1.save();

// Insert Many
// User.insertMany(
//     { name: "arooj", age: 22, email: "arooj@gamil.com" },
//     { name: "attika", age: 19, email: "attitka@gamil.com" },
//     { name: "muryam", age: 20, email: "muryam@gamil.com" }
// );

// Find data   2
// User.find({})//find all data
// User.findById("spcifice id")//find using Id
// User.findOne({age:{$gt:21}})//find only one
// User.find({ age: { $gt: 21 } })//find all where age is greater then 21 data
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


//Update 3
// User.findOneAndUpdate({age:{$lt:22}},{age:21},{new:true})
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
// User.findByIdAndUpdate('65a0bdb907a32016500d411b',{age:22},{new:true})
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
//Delete 4 
// User.findByIdAndDelete('65a0bdb907a32016500d411b',{age:22},{new:true})
// .then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
User.find({}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});

