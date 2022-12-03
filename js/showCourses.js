const tableBody = document.querySelector('#listadoRecetas tbody');
let courseList = [];


const showTable = () => {
    tableBody.innerHTML = '';
    courseList.forEach(course => {
        let row = tableBody.insertRow();
        row.insertCell().innerText = course.carrera;
    });

};

const showList = async() => {
    courseList = await obtenerDatos('show-courses');
    showTable();
}

showList();