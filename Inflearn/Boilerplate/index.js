const express = require('express');
const app = express();
const port = 5000;
const {
    User
} = require('./models/User');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const config = require('./config/key');
const mongoose = require("mongoose");
mongoose.connect(
        config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        }
    ).then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

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

app.post('/login', (req, res) => {

    // 요청된 이메일이 데이터베이스에 있는지 찾는다.

    // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인.

    // 비밀번호까지 맞다면 토큰을 생성하기


})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
