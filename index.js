const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())

app.get('/sum',function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a+b;
    res.status(200).send(sum.toString())
})

app.listen(3000)