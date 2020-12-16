const { connect } = require("http2");

const express = require("express"),
      bodyParser = require("body-parser"),
      fs = require("fs"),
      app = express(),
      port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync("./database.json"),
      conf = JSON.parse(data),
      mysql = require("mysql"),
      multer = require("multer"),
      upload = multer({dest: "./upload"});

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
})
connection.connect();

app.get('/api/customers', (req,res) => {
   connection.query(
       "SELECT * FROM CUSTOMER WHERE isDeleted = 0",
       (err, rows, fields) => {
           res.send(rows);
       }
   )
});

app.use("/image", express.static("./upload"));


app.post('/api/customers', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, now(), 0)',
        id = req.body.id,
        image = '/image/' + req.file.filename,
        name = req.body.name,
        age = req.body.age,
        birthday = req.body.birthday,
        job = req.body.job,
        params = [image, name, age, birthday, job];

    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    );
});

app.delete('/api/customers/:id', (req, res) => {
    let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?',
    params = [req.params.id];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }    
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`))



