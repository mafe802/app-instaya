const path = require ('path');
const express = require ('express');
const mongoose = require ('mongoose');
require ('dotenv').config();
const app = express();

//Servidor http://localhost:9000
const PORT = process.env.PORT || 9000;
app.listen(PORT, ()=> console.log('Servidor escuchando en el puerto ', PORT));


//Conecta con la base de datos mongodb atlas
mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => console.log('Conectado a MongoDB Atlas'))
   .catch((error) => console.error(error));


//mensaje en la api principal http://localhost:9000
app.get('/', (req, res)=>{
   res.send('Welcome Api')
});

//se conecta con la coleccion especifica (users) en la base de datos
const usuario_modelo = mongoose.model('users', usuario_esquema)


//esquema de usuarios manejados en mongo
const usuario_esquema = mongoose.Schema({
   name: String,
   username:String,
   password:Number,
   email: String
});


//muestra todos los usuarios existentes
const obtener_datos = async () => {
   const datos = await usuario_modelo.find()
   console.log(datos)
}
obtener_datos()


//muestra un usuario (existente) en especifico
const usuario_especifico = async (id) => {
   const datos = await usuario_modelo.findById({_id:id})
   console.log(datos)
}
usuario_especifico('638fcc969cab724a77c503bb')


//elimina info de la base de datos por id
const eliminar_registro = async (id) => {
   const registro = await usuario_modelo.deleteOne({_id:id})
}
eliminar_registro('6391212b7ea70ca762eb0535')


//crea un nuevo usuario
const crear = async () => {
   const registro = new usuario_modelo ({
   name:"Luis Miguel",
   username: "elmiguel",
   password:"122333",
   email: "elmiguelos@outlook.com"
   })
   const resultado = await registro.save()
}
crear()


//actualizar un usuario existente (id)
const update_datos = async (id) => {
const actualizar = await usuario_modelo.updateOne({_id:id},
   {
      $set:{
         username:"Milena",
         password: 69542243
      }
   })
}
update_datos('63911ea57ea70ca762eb0534')


//intento de union de node con formulario.html pero se necesita react
const path_backend = path.resolve();
const path_frontend = path.join(path_backend, '../frontend');

//middleware
app.use(express.static(path_frontend));

app.get('/', function(peticion, respuesta){
   respuesta.sendFile(path_frontend + '/registro-usuario.html')
})
