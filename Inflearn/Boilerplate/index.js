const express = require('express');
const app = express();
const port = 5000;
const { User } = require('./models/User');

const bodyParser = require('body-parser');
// bodyParser가 Client에서 오는 정보들을 서버에서 분석해서 가져올 수 있도록 해주는 코드이다.
// 'application/x-www-form-urlencoded'처럼 된 데이터를 분석해서 가져올 수 있게 해주는 것
app.use(bodyParser.urlencoded({extended: true}));
// 'application/json'처럼 된 데이터를 분석해서 가져올 수 있게 해주는 것
app.use(bodyParser.json());


const config = require('./config/key');
const mongoose = require("mongoose");
mongoose.connect(
    config.mongoURI,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: true,
    }
).then(() => console.log("MongoDB connected..."))
 .catch(err => console.log(err));

app.get('/', (req, res) => {res.send('Hello World!')}) 

// Register Route 생성코드
app.post('/register', (req, res) => {

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({ 
            success: false, 
            message: err, 
        })
        return res.status(200).json({
             success: true 
        })
    })
})

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})


