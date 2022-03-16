var express = require('express');
var postRouter = express.Router();

postRouter.post('/', (req, res, next) => {
    res.send({
        'id':'아이디',
        'pw':'패스워드'
        })
})

module.exports = postRouter;