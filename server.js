var express = require('express');
var app = express();

var getRoutes = require('./api/getrouter')
var postRoutes = require('./api/postrouter')

app.use('/get', getRoutes )
app.use('/post', postRoutes )

app.set('port', 8080)
app.get('/', (req, res) => {
    res.send(' localhost 첫 페이지 ')
})

app.listen(app.get('port'), () => {
    console.log(' 이 텍스트가 출력되면 첫 페이지는 정상 작동 중 ')
})