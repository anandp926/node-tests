const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(400).send({
        error: 'page not found',
        name: 'todo app v1.0'
    });
})


app.get('/users', (req, res) => {
    res.send([{
        name: 'Anand',
        age: 20
    }, {
        name: 'Rahul',
        age: 24
    }, {
        name: 'Jen',
        age: 26
    }])
})

app.listen(3000)

module.exports.app = app