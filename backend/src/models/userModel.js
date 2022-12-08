const mongoose = require ('mongoose');

//se establece el modelo de datos 
const userSchema = mongoose.Schema({
   username: {
      type: String, 
   },
   password: {
      type: String,
   }
});

module.exports = mongoose.model('User', userSchema);


