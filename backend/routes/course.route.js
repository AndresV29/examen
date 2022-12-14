const express = require('express');
const Course = require('../models/course.model');
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

router.get('show-courses', (req, res) => {
    Course.find((error, lista) => {
        if (error) {
            res.json({
                error
            });
        } else {
            res.json({
                msg: "Se mostraron correctamente los cursos",
                lista
            })
        }
    })
})
module.exports = router;