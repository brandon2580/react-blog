const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
var mysql = require('mysql');

app.use(express.json())
app.use(cors())
require('dotenv').config()

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  port: 3300,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/", (req, res) => {
  console.log('Successful POST req')
  console.log(req.body)
});

app.listen(9000, () => console.log("Listening on port 9000"));