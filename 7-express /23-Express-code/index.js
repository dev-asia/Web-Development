const express = require('express')
const app = express()
port = 3000;

app.listen(port,()=>{     //it listen only resquest
    console.log(`server is listen now ${port}`)
})
// app.get("/",(req,res)=>{
//     console.log("By defult yehi response jata hy")
//     res.send("By defult yehi response jata hy")
// })
// app.get("/search",(req,res)=>{
//     console.log("your are searching anything")
//     res.send("your are searching anything")
// })
// app.get("/mango",(req,res)=>{
//     console.log("ager request ky baad mngo ka route ho leky to mango wala hi response jaye")
//     res.send("ager request ky baad mngo ka route ho leky to mango wala hi response jaye")
// })
// app.get("/apple",(req,res)=>{
//     console.log("agr route apple hoye to ye wala  response jaye ga")
//     res.send("agr route apple hoye to ye wala  response jaye ga")
// })
// app.get("*",(req,res)=>{
//     console.log("agr invaild route ho jo exist hi na kry")
//     res.send("agr invaild route ho jo exist hi na kry koi erro print krwana ho")
// })

// app.use((req,res)=>{    //it give response after accpeting the request
//     console.log(`your request receive`)
// let htmlCode = "<h1>Asia Aulakh<h1><h3>class:  13<h3>"
//     res.send(` We can send any thing in response${htmlCode}`)
// })


//Params:
//agr hum request ky saat kuch additional value bi add kr dy to osy
//params khty hy
//or os params/value ko acces kr ky hum apny variable ko assign kr skty hy
//asa krny sy humy hr bar slash kr ky code ni lekhna pry ga.Jsy hum ny oper lekha hy
//  app.get("/:username/:id",(req,res)=>{
//     let { username, id  } = req.params;

//     res.send(`welcome to the page of ${username} and its ID is ${id}. `)
// })

//query string
//agr hum request ky saat hum query string ko bi add ky to os ko acces kr ky 
//variable ko assigne kiya ja skta hy :
//req.query  "es ky ander sari query string a kr store hoti hy . or hum es method sy sari query string extract kr skty hy"
// app.get("/search",(req,res) =>{
//     let {q} = req.query;
//     res.send(`This is my query string: ${q}`)
//     if(!q){
//         res.send(`Your qury was not mached`)
//     }
  
// })
//Practice oper waly ki


app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send("Your query string is not complete");
    } else {
        res.send(`My query string is ${q}`);
    }
});

app.get("/:name/:id", (req, res) => {
    let { name, id } = req.params;
    res.send(`<h1>My name is ${name}. This is my id ${id}</h1>`);
});
