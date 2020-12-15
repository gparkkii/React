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
connection.connect();

const multer = require("multer"),
      upload = multer({dest: "./upload"});

app.get('/api/customers', (req,res) => {
   connection.query(
       "SELECT * FROM CUSTOMER WHERE isdeleted = 0",
       (err, rows, fields) => {
           res.send(rows);
       }
   )
});

app.use("/image", express.static("./upload"))
app.post('/api/customers', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, now(), now(), 0)',
        image = '/image/' + req.file.filename,
        name = req.body.name,
        age = req.body.age,
        birthday = req.body.birthday,
        job = req.body.job,
        userInfo = [image, name, age, birthday, job];

    connection.query(sql, userInfo,
        (err, rows, fields) => {
            res.send(rows);
            console.log(rows);
            console.log(err);
        }
    );
})

app.delete('/api/customers/:id'), (req, res) => {
    let sql = 'UPDATE CUSTOMER SET isdeleted = 1 WHERE id = ?',
        userInfo = [req.userInfo.id];
    connection.query(sql, userInfo,
        (err, rows, fields) => {
            res.send(rows);
            console.log(rows);
            console.log(err);
        }    
    )
}

app.listen(port, () => console.log(`Listening on port ${port}`))



