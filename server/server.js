const express=require("express");
const app=express();
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require("mysql");
const db=mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "keetappbase"
});

let users=[]; 


app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({extended:true}))


// users
app.get('/api/get',(req,res)=>{
      const sqlSelect="select * from users"
        db.query(sqlSelect,(err,result)=>{
          // users.push(result.body);
          users = []
          result.map((e)=>{
           users.push(e)
          })
        res.send(users);
        
      });
})

app.post('/api/insert',(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    const sqlInsert="insert into users(email,password) values(?,?)"
    db.query(sqlInsert,[email,password],(err,result)=>{
      console.log(result)
      res.status(200).json(result)
    });
})



//teklif irad --offer

app.post('/api/offerinsert',(req,res)=>{
  const email=req.body.email
  const phone=req.body.phone
  const author=req.body.author
  const book=req.body.book
  const sqlInsert="insert into offer(email,phone,author,book) values(?,?,?,?)"
  db.query(sqlInsert,[email,phone,author,book],(err,result)=>{
    console.log(result)
    res.status(200).json(result)
  });
})




app.listen(3001,()=>{
    console.log("Running on port localhost:3001");
})