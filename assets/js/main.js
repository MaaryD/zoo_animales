console.log("Entro al main.js");

const url_api = "http://ucamp.alumnos.dev4humans.com.mx";
const tblAnimals = document.getElementById("tblAnimals");

function loadAnimals() {
    fetch (url_api + "/Main/endpoint_animales_zoo", 
{
    method: "GET"
})
.then(response => response.json())
.then (result => {
    tblAnimals.innerHTML = "";
    for (const animal of result.data) {
        let tr = `<tr>
        <td>${animal.id}</td>
        <td>${animal.nombre}</td>
        <td>${animal.cantidad}</td>
        </tr>`;

        tblAnimals.innerHTML += tr;
    }
})
.catch(error => console.log("¡Error!"));
};

loadAnimals();