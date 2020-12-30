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
    //회원가입 할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.

    const user = new User(req.body)
    // bodyParser를 통해 req.body 안에 JSON 형식으로 {id: "Hello", password: "123"}과 같이 들어있다.
    // bodyParser를 이용해서 req.body로 클라이언트에서 보내는 정보를 받아준다.

    //save는 몽고디비 메서드이다. user.save()를 통해 위의 정보들이 유저모델에 저장된다.
    // (err,doc) => {} : callback function 
    user.save((err, userInfo) => {
        // 만약 저장할 때 에러가 있으면 클라이언트에 에러가 있다고 전달을 해야한다.
        if (err) return res.json({ 
            // 에러가 났을 경우 success false, 그리고 에러 메시지를 전달한다.
            success: false, 
            message: err, 
        })
        // 만약 성공을 했을 경우, 저장한 userInfo를 클라이언트에게 성공했다는 형식을 json형태로 전달한다.
        // status 200: 성공했다는 형식
        return res.status(200).json({
             success: true 
        })
    })
})

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})


