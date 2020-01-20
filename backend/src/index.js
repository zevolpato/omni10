const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://aula2020:aula2020@zevolpato-dk8di.mongodb.net/aula2020?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json())

app.use(routes);


app.listen(3000)