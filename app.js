const express = require('express')
const mysql = require('mysql2');

const mysqlConfig = {
  host: "mysql_server",
  user: "test_usr",
  password: "mdp",
  database: "test"
}

let db = null

const app = express()

app.get('/', function (req, res) {
  db =  mysql.createConnection(mysqlConfig);

  db.connect(function(err) {
    if (err) throw err;
    res.send('connected')
  });
})

app.listen(5000)

console.log("listening on port 5000")
