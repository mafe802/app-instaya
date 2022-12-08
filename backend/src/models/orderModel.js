const mongoose = require ('mongoose');

//establece datos de la orden
const orderSchema = mongoose.Schema({
   fecha: {
      type: Date,
      required: true
   },

   hora: {
      type: Number,
      required:true
   },

   direccion: {
      type: String,
      required:true
   },

   ciudadR: {
      type: String,
      required:true
   },

   nombre: {
      type: String,
      required:true
   },

   cedulaNit: {
      type: Number,
      required:true
   },

   ciudadE: {
      type: String,
      required:true
   }
});

module.exports = mongoose.model('Order', orderSchema);