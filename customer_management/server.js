const { connect } = require("http2");

const express = require("express"),
      bodyParser = require("body-parser"),
      fs = require("fs"),
      app = express(),
      port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync("./database.json"),
      parsedData = JSON.parse(data),
      mysql = require('mysql');

const connection = mysql.createConnection({
    host: parsedData.host,
    user: parsedData.user,
    password: parsedData.password,
    port: parsedData.port,
    database: parsedData.database
})

app.get('/api/customers', (req,res) => {
   connection.query(
       "SELECT * FROM CUSTOMER",
       (err, rows, fields) => {
           res.send(rows);
       }
   )
});

app.listen(port, () => console.log(`Listening on port ${port}`))



