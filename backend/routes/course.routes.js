const express = require('express');
const Actividad = require('../models/course.models');
const router = express.Router();

router.post('/registrar-curso', (req, res) => {
    let Course = new Course({
        'nombre': req.body.nombre,
        'tipo': req.body.tipo,
    });

    Course.save(error => {
        if (error) {
            res.json({
                error
            });

        } else {
            res.json({
                msg: 'Los datos fueron registrados correctamente.'
            });
        }
    });

});

module.exports = router;