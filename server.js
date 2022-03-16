var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./db/config.js');
var connection = mysql.createConnection(dbconfig)

var postRoutes = require('./api/postrouter')
var getRoutes = require('./api/getrouter')

var app = express();
app.get('/introduce', (req, res) => {
    connection.query(
        'SELECT * FROM introduce_react_node.prev_interview;',
        (error, result) => {
            if(error) throw error;
            res.send(result)
        }
    )
})

app.use('/get', getRoutes )
app.use('/post', postRoutes )

app.set('port', 8080)
app.get('/', (req, res) => {
    res.send(' / 루트요청받음');
})

app.listen(app.get('port'), () => {
    console.log(' 이 텍스트가 출력되면 첫 페이지는 정상 작동 중 ');
})