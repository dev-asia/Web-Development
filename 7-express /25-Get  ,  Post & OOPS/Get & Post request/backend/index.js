let express =require("express");
let app = express();
let port= 8080;

app.use(express.urlencoded({extended: true}))

app.listen(port,()=>{
    console.log("port is listening now");
})
app.get("/register",(req,res)=>{
let {name, password} = req.query;
    res.send(`your data is recive which is:name = ${name} & password = ${password}`)
})
app.post("/register",(req,res)=>{
    let {name,password} = req.body

    res.send(`your data is recieve ${name}`)
})