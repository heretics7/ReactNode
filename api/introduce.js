var express = require('express')
var sqlsend = express.Router();
var mysql = require('mysql');
var dbconfig = require('./db/config.js');
var connection = mysql.createConnection(dbconfig)

sqlsend.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM reactinterview.contact;',
        (error, result) => {
            if(error) throw error;
            res.send(result)
        }
    )
})

module.exports = sqlsend;