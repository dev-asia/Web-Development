const express = require('express')
const app = express();
const port = 8080;
const ejs = require('ejs');
app.set('view engine', 'ejs');
var methodOverride = require('method-override');
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
const { v4: uuidv4 } = require('uuid');
const userId = uuidv4();
//genrate fake data
const { faker } = require('@faker-js/faker');
let userData= ()=> {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
      faker.image.avatar()
];
  }
//Connect  with database
  const mysql = require('mysql2');
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'asia',
    database: 'apna_college',
    password:"Asia@272"
  });

  //Inserting value into table 
  // let data = [];
  // for(let i=1; i<=100; i++){
  //   data.push(userData());
  // }
  // let q = "INSERT INTO user_data (userId, username, email, password, photo) VALUES ?;";
  // let user = [
  //   [1,"asia","asia@gmail.com","Asia@272"],
  //   [2,"arooj","arooj@gmail.com","arooj@city"],
  //   [3,"attika","attika@gmail.com","attika_villege"],
  //   ]
//   try{
//   connection.query(q,[data],(err, result)=>{
//     if (err) throw err
//     console.log(result)
//   })
// }catch(err){
//   console.log(err)
// }

//Create Rounting
//NO. 1
//only count number of user 
app.get("/", (req, res) => {
  const query = 'SELECT count(*) FROM user_data';
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }
    let count = results[0]["count(*)"];
   res.render("home.ejs",{count})
  });
});
//NO.2
//show all information
app.get("/user", (req, res) => {
  const query = 'SELECT * FROM user_data';
  connection.query(query, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }
    // Render the EJS template with the retrieved data
    res.render('index.ejs', {results});
  });
});
//NO.3
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  console.log(id)
  res.render("edit.ejs",{id})
})
//Edit name of user
app.patch("/user/patch/:id",(req,res)=>{
  let {id} = req.params;
  let {newname,password} = req.body;
  const q1 = `SELECT * FROM user_data WHERE userId = '${id}'`;
  connection.query(q1,(err,results)=>{
    if (err) {
      console.error(err);
      res.send(err);
    }
    let userPassword = results[0].password;
    if(password != userPassword){
      res.send("Wrong Password!")
    }else{
      const q2 =`UPDATE user_data
      SET username = '${newname}' 
      where userId = '${id}';`
      connection.query(q2,(err,results)=>{
        if (err) {
          console.error(err);
          res.send(err);
        }
        res.redirect("/user");
    
      })
    }
  })
})
//Add new User data
app.get("/user/new",(req,res)=>{
  res.render("new.ejs")
})
//when submit user data
app.post("/user/post",(req,res)=>{
  let {name,email,passwrod} = req.body;
  let photo = "No pic"
  const q = `INSERT INTO  user_data  (userId, username, email, password, photo) VALUES (?); `
  let data = [userId,name,email,passwrod,photo];
  connection.query(q,[data],(err,results)=>{
    if (err) {
      console.error(err);
      res.send(err);
    }
    res.redirect("/user")
  })
})
//5 Delete 
app.get("/user/:id/delete",(req,res)=>{ 
  let {id} = req.params;
  res.render("delete.ejs",{id})
})
//when submit delete request
app.delete("/user/delete/:id",(req,res)=>{
  let {id} = req.params;
  let {password,email} = req.body;
  const q1 = `SELECT * FROM user_data WHERE userId = '${id}';`
  connection.query(q1,(err,results)=>{
    if (err) {
      console.error(err);
      res.send(err);
    }
    let userEmail = results[0].email;
    let userPassword = results[0].password;
    if(userPassword == password || userEmail == email){
      const q = `DELETE FROM user_data WHERE userId = '${id}';`
      connection.query(q,(err,results)=>{
        if (err) {
          console.error(err);
          res.send(err);
        }else{
          res.redirect("/user")
        }
       }) 
    }else{
      res.send("WRONG email and ID! Please enter correct email and ID")
    }
  }) 
})

app.listen(port, () => {
  console.log("The port is listening now");
});