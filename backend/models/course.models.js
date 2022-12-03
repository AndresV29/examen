const mongoose = require('mongoose');
let schemaCourse = new mongoose.Schema({
    //ir de la mano con el formulario
    'carrera': { type: String, required: true, unique: false },
    'curso': { type: String, required: true, unique: false },
    'creditos': { type: Number, required: true, unique: false },

});
module.exports = mongoose.model('Actividad', schemaCourse, 'actividades');