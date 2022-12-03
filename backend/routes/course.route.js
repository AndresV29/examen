const express = require('express');
const Course = require('../models/course.models');
const router = express.Router();

router.post('/registrar-curso', (req, res) => {
    let newCourse = new Course({
        'carrera': req.body.carrera,
        'curso': req.body.curso,
        'creditos': req.body.creditos
    });

    newCourse.save(error => {
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