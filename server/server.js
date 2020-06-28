const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
var mysql = require('mysql');

app.use(express.json())
app.use(cors())
require('dotenv').config()

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE_NAME
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/", (req, res) => {
  console.log('Successful POST req')
  console.log(req.body)
  var sql = "INSERT INTO blogs (title, author, content) VALUES ('" + req.body.title + "', '" + req.body.author + "', '" + req.body.content + "')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

app.post("/data", (req, res) => {
  con.query("SELECT title, author, content FROM blogs", function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  });
})

app.listen(9000, () => console.log("Listening on port 9000"));  