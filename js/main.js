const carrera = document.getElementById("carrera");
const course = document.getElementById("nombre");
const credits = document.getElementById("creditos");
const btnSave = document.getElementById("guardar")

let completed = false;

function validaCarrera() {
    if (carrera === "") {
        completed = false;
        carrera.classList.add("empty")
    } else {
        completed = true;
        carrera.classList.remove("empty")
    }
}

function validaCourse() {
    if (course === "") {
        completed = false;
        course.classList.add("empty")
    } else {
        completed = true;
        course.classList.remove("empty")
    }
}

function validaCredits() {
    if (credits === "") {
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
        //connect to db
    }
}