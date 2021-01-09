const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50,
    },
    email: {
        type: String,
        trim: true, // trim: 빈칸(Space)를 없애준다.
        unique: 1 // unique: 똑같은 email 쓰지 못하게
    },
    password: {
        type: String,
        minlength: 5,
    },
    lastname: {
        type: String,
        maxlength: 50,
    },
    role: { // role: 어떤 유저가 관리자가 될 수도, 일반 유저가 될 수도 있다. 
        type: Number, // 유저의 role을 숫자로 부여하기
        default: 0, // default: 임의로 role을 지정하지 않았을 땐 default로 0을 준다.
    },
    image: String, // {} 오브젝트를 사용하지 않고 단순하게 써줄 수도 있다.
    token: {
        type: String, // token: 유효성 관리
    },
    tokenExpiration: {
        type: Number, // tokenExp: token 사용의 유효기간
    }
})

const User = mongoose.model('User', userSchema);


// salt를 이용해서 비밀번호를 먼저 암호화 한다. saltRounds는 salt의 자릿수를 얘기하는 것

//pre()는 몽구스 메서드
//pre('save', function()) 유저모델에 유저 정보를 저장하기 전에!! 이 함수를 실행시키겠다는 뜻이다.
//next 인자는 바로 register route로 보내주는 기능이다.
userSchema.pre('save', function (next) {
    const user = this;

    //email이나 이름을 바꿀 경우에도 암호화를 진행하면 안되기때문에 비밀번호를 바꿀 때만 암호화를 진행할 수 있는 조건 넣어주기
    if (user.isModified('password')) {
        // 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);
            //에러가 나면 바로 register route로 넘어가서 에러 처리하기

            //hash가 암호화된 비밀번호를 뜻한다.
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        //비밀번호를 암호화하지 않을 경우엔 바로 register route로 넘어갈 수 있도록
        next();
    }
})

userSchema.methods.comparePassword = function(plainPassword, callback) {
    //ex) plainPassword = 123456 / 암호화된 비밀번호 = 23748975987125351
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return callback(err),
        callback(null, isMatch)
    })
}

userSchema.methods.generateToken = function(callback) {
    const user = this;
    //Json Web Token을 이용해서 Token 생성하기
    const token = jwt.sign(user._id, 'secretToken');
    user.token = token;
    user.save(function(err, user) {
        if(err) return callback(err)
        callback(null, user)
    })
}



module.exports = {
    User
};