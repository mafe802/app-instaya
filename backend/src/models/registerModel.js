const mongoose = require ('mongoose');

//se establece el modelo de datos 
const registerSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   username: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      minLength: 8,
      maxLength: 16,
      required: true,
   },
   email: {
      type: String,
      required: true,
   }
});

module.exports = mongoose.model('User', registerSchema);
