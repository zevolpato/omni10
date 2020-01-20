const { Router } = require('express')
const DevController = require('./controllers/DevController')

const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)



module.exports = routes



//  let { name , avatar_url, bio } = apiResponse.data;

//  if(!name){
//      name = apiResponse.data.login;
//  }
//  console.log(response.data);
// routes.post('/users', (req,res) =>{
//     console.log(req.body)
//     return res.json({name : req.body.name})
// })

// routes.get('/users', (req,res) => {
//     //console.log(req.query.search);
//     return res.json({ message : 'Hello  World!!!!'})

// })

// routes.delete('/users/:id', (req,res) =>{
//     console.log(req.params)
//     return res.json({ message : 'Delete!!!!'})
// })


