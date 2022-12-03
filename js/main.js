const carrera = document.getElementById("carrera");
const course = document.getElementById("nombre");
const credits = document.getElementById("creditos");
const btnSave = document.getElementById("guardar")

let completed = false;

const addCourse = () => {
    let curso = {
        'carrera': carrera.value,
        'curso': course.value,
        'creditos': credits.value

    };
    registroDatos('registrar-curso', curso, 'mostrar-cursos.html')
}

function validaCarrera() {
    if (carrera.value === "") {
        completed = false;
        carrera.classList.add("empty")
    } else {
        completed = true;
        carrera.classList.remove("empty")
    }
}

function validaCourse() {
    if (course.value === "") {
        completed = false;
        course.classList.add("empty")
    } else {
        completed = true;
        course.classList.remove("empty")
    }
}

function validaCredits() {
    if (credits.value === "") {
        completed = false;
        credits.classList.add("empty")
    } else {
        completed = true;
        credits.classList.remove("empty")
    }
}

function validateInfo() {
    validaCarrera();
    validaCourse();
    validaCredits();
    if (completed) {
        alert("Registrado correctamente")
    } else {
        alert("Favor rellenar los espacios vacíos.")
    }
}
btnSave.addEventListener('click', e => {
    validateInfo();
});