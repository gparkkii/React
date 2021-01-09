const express = require('express');
const app = express();
const mongoose = require("mongoose");
const config = require('./config/key');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = 5000;
const {
    User
} = require('./models/User');
const { useRouteMatch } = require('react-router-dom');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());


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
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당되는 유저가 없습니다."
            })
        }

        // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인.
        user.comparePassword(req.body.password , (err, isMatch ) => {
            if(!isMatch) {
                return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."})
            }
        })

        // 비밀번호까지 맞다면 토큰을 생성하기
        user.generateToken((err, user) => {
            if(err) return res.status(400).send(err);
            // token을 cookie에 저장하기
            res.cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id })

        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



            