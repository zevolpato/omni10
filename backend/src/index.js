const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://aula2020:aula2020@zevolpato-dk8di.mongodb.net/aula2020?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json())

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
    return res.json({name : req.body.name})
})

app.listen(3000)