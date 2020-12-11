const express = require("express"),
      bodyParser = require("body-parser"),
      app = express(),
      port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res) => {
    res.send([
        {
            'id': '1',
            'image': 'https://placeimg.com/120/120/1',
            'name': '박지연',
            'age': '28세',
            'birthday': '1993년 12월 1일',
            'job': '취준생',
        },
        {
            'id': '2',
            'image': 'https://placeimg.com/120/120/2',
            'name': '백근우',
            'age': '26세',
            'birthday': '1995년 10월 17일',
            'job': '취준생',
        },
        {
            'id': '3',
            'image': 'https://placeimg.com/120/120/3',
            'name': '보노보노',
            'age': '알려진바 없음',
            'birthday': '알려진바 없음',
            'job': '취준생',
        },
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`))