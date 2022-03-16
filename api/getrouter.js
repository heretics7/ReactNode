var express = require('express');
var getRouter = express.Router();

getRouter.get('/', (req, res, next) => {
    res.send('get은 짧고 단순한 type-text만 가져올 수 있다. 그래서 속도도 빠름')
})

module.exports = getRouter;