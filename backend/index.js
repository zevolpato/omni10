const express = require('express');

const app = express()

app.get('/users', (req,res) => {
    //console.log(req.query.search);
    return res.json({ message : 'Hello  World!!!!'})

})

app.delete('/users/:id', (req,res) =>{
    console.log(req.params)
    return res.json({ message : 'Delete!!!!'})
})

app.post('/users', (req,res) =>{
    console.log(req.body)
    return res.json({ message : 'inserir!!!!'})
})

app.listen(3000)