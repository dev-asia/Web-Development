const express = require('express') //
const app = express();
const port = 3002;
const ejs = require('ejs');

app.set('view engine', 'ejs');//set ejs for temleting
// Serve static files from the 'public' folder
app.use(express.static('public'));//for css styling
// Middleware to handle URL-encoded data
app.use(express.urlencoded({ extended: true }));
//Method ovverride
var methodOverride = require('method-override');
app.use(methodOverride('_method'))

const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'asia',
  database: 'company',
  password:"Asia@272"
});
;
// 1) count of all employs  
app.get("/",(req,res)=>{
 const q =`SELECT count(*) FROM employ_data;`;
 connection.query(q,(err,result)=>{
    if(err){
        throw err;
    }else{
        let totalEmploy = result[0]['count(*)'];
        res.send(`<h1>Total Employs: ${totalEmploy}`)
    }
 })
})
//2) veiw all employ
app.get("/employs",(req,res)=>{
    let q = "SELECT * FROM employ_data;";
    connection.query(q,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.render("index.ejs",{result})
        }
    }) 
})
// 2)  add new employ
app.get("/employs/new",(req,res)=>{
   res.render("new.ejs")
})
app.post("/new",(req,res)=>{
    let {id, name, age, salary} = req.body;
    let q = `INSERT INTO employ_data (id, name, age, salary) VALUES ('${id}','${name}','${age}','${salary}')`
    connection.query(q,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.redirect("/employs")
        }
    })
})
// 3)update
app.get("/employs/edit/:id",(req,res)=>{
    let {id} = req.params;
    let q = `SELECT * FROM employ_data WHERE id = ${id};`;
    connection.query(q,(err,result)=>{
        if(err){
           throw err;
        }else{
            res.render("edit.ejs",{result})
        }
    })
})
app.patch("/employs/edit/:id",(req,res)=>{
    let {id} = req.params;
    let {name, age} = req.body;
    const q = `UPDATE employ_data SET name = '${name}' WHERE id = ${id};`;
    connection.query(q,(err,result)=>{
        if(err){
            throw err
            res.status(err)
        }else{
        const q2= `UPDATE employ_data SET age = '${age}' WHERE id = ${id};`;
        connection.query(q2,(err,result)=>{
        if(err){
            throw err
            res.status(err)
        }else{
            res.redirect("/employs")
        }
     })
    }
  })
})
//Delete 
app.get("/employs/delete/:id",(req,res)=>{
    let {id} = req.params;
    let q = `SELECT * FROM employ_data WHERE id = ${id};`;
    connection.query(q,(err,result)=>{
        if(err){
           throw err;
        }else{
            res.render("delete.ejs",{result})
        }
    })
})
app.delete("/employs/delete/:id",(req,res)=>{
    let {id} = req.params;
    let {name} = req.body;
    let q = `SELECT * FROM employ_data WHERE id = ${id};`
    connection.query(q,(err,result)=>{
        if(err){
            throw err;
        }else{
            let employ_name = result[0]["name"];
            if(employ_name == name){
                let q2 = `DELETE FROM employ_data WHERE id = ${id}`
                connection.query(q2,(err,result)=>{
                    if(err){
                        throw err;
                    }else{
                      res.redirect("/employs")
                    }
                })
            }else{
              res.send("Wrong name of emoply")
            }
        }
    })
})
//listeing port
app.listen(port,()=>{
    console.log("your port is listening now")
})