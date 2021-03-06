'use strict';

const express = require('express');
const bodyParser = require('body-parser');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('P5 Docker');
});

app.post('/suma', (req, res) => {
    let nums = req.body.nums;
    let total = 0;
    for(var i in nums) { total += nums[i]; }
    
    res.send({"respuesta": total});
});

app.post('/resta', (req, res) => {
    let numToSubs = req.body.numToSubs;
    let nums = req.body.nums;
    for(var i in nums) { numToSubs -= nums[i]; }
    
    res.send({"respuesta": numToSubs});
});

app.post('/multiplica', (req, res) => {
    let nums = req.body.nums;
    let total = 1;
    for(var i in nums) { total *= nums[i]; }
    
    res.send({"respuesta": total});
});

app.post('/divide', (req, res) => {
    let numToDiv = req.body.numToDiv;
    let nums = req.body.nums;
    for(var i in nums) { numToDiv /= nums[i]; }
    
    res.send({"respuesta": numToDiv});
});

app.post('/free', (req, res) => {
    let operation = req.body.operation;
    let operationArr = operation.split(" ");
    let total = eval(operationArr[0]);
    
    for (let i = 1, j = 2; j < operationArr.length; i+=2, j+=2) {
        if(String(operationArr[i]) === '+') {
            total = total + eval(operationArr[j])
        } else if(String(operationArr[i]) === '-') {
            total = total - eval(operationArr[j])
        } else if(String(operationArr[i]) === '*') {
            total = total * eval(operationArr[j])
        } else if(String(operationArr[i]) === '/') {
            total = total / eval(operationArr[j])
        } else {
            res.send("ERROR");
        }
    }

    res.send({"respuesta": total});
})

app.get('/autores', (req, res) => {
    res.send({
        "autor1": "Luis Ricardo Díaz Flores",
        "autor2": "Omar Pérez Cano"
    })
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

