const express = require('express');

const app = express()

app.get('/', (req,res) => {
    //console.log(req.query.search);
    return res.json({ message : 'Hello  World!!!!'})

})

app.delete('/:id', (req,res) =>{
    console.log(req.params)
    return res.json({ message : 'Delete!!!!'})
})
app.listen(3000)