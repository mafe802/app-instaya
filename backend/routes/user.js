const mongoose = require ('mongoose');
const express = require ('express');

//Endpoints
//Llama a los modelos (Schema)
const userSchema = require ('../src/models/userModel');
const router = express.Router();


//toma toda la información de los usuarios
router.get('/users', (req, res)=>{
   userSchema
      .find()
      .then((data)=> res.json(data))
      .catch((error)=> console.error({message: error}))
});

module.exports = router;
/*
//iniciar sesion http://localhost:9000/users
router.post('/users', (req, res) => {
   const user = userSchema(req.body);
   user
      .save()
      .then((data)=> res.json(data))
      .catch((error)=> console.error({message: error}))
});

//toma solo la informacion de 1 usuario
router.get('/users/:id', (req,res)=>{
   const {id} = req.params;
   userSchema
      .findById()
      .then((data)=> res.json(data))
      .catch((error)=> console.error({message: error}))
});

//actualiza información del usuario
router.put('/users/:id', (req, res)=>{
   const {id} = req.params;
   const {name, age, email} = req.body;
   userSchema
      .updateOne({_id: id}, {$set: {name, age, email}})
      .then((data)=> res.json(data))
      .catch((error)=> console.error({message: error}))
});

//eliminar usuario
router.delete('/users/:id', (req, res)=>{
   const {id} = req.params;
   userSchema
      .remove({_id: id})
      .then((data)=> res.json(data))
      .catch((error)=> console.error({message: error}))
});
*/
