function mostrar() {
    document.getElementById("content").innerHTML =
        '<form><h3>Mostrar profesional</h3><label for="nombre">Nombre:</label><br><input type="text" name="nombre" id="nombre"><br><br><button onclick="mostrarProfesionales(event)">Mostrar</button></form>'
}

function crear() {
    document.getElementById("content").innerHTML =
        '<form><h3>Insertar profesional</h3><label for="nombre">Nombre:</label><br><input type="text" name="nombre" id="nombre"><br><label for="edad">Edad:</label><br><input type="text" name="edad" id="edad"><br><label for="nacionalidad">Nacionalidad:</label><br><input type="text" name="nacionalidad" id="nacionalidad"><br><label for="profesion">Profesion:</label><br><input type="text" name="profesion" id="profesion"><br><br><button onclick="insertarProfesional(event)">Registrar</button></form>';
}

function actualizar() {
    document.getElementById("content").innerHTML =
        '<form><h3>Actualizar profesional</h3><label for="nombre">Nombre:</label><br><input type="text" name="nombre" id="nombre"><br><label for="edad">Edad:</label><br><input type="text" name="edad" id="edad"><br><label for="nacionalidad">Nacionalidad:</label><br><input type="text" name="nacionalidad" id="nacionalidad"><br><label for="profesion">Profesion:</label><br><input type="text" name="profesion" id="profesion"><br><br><button onclick="actualizarProfesional(event)">Actualizar</button></form>';
}

function eliminar() {
    document.getElementById("content").innerHTML =
        '<form><h3>Eliminar profesional</h3><label for="nombre">Nombre:</label><br><input type="text" name="nombre" id="nombre"><br><br><button onclick="eliminarProfesional(event)">Eliminar</button></form>'
}


async function mostrarProfesionales(event) {
    event.preventDefault();
    let id = document.getElementById("nombre").value;
    let url;
    if (id != "") {
        url = "http://localhost:3001/profesionales?id=" + id;
    } else {
        url = "http://localhost:3001/profesionales";
    }
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        method: "GET"
    }
    try {
        let data = await fetch(url, param);
        let result = await data.json();
        document.getElementById("result").innerHTML = JSON.stringify(result);
    } catch (error) {
        console.log(error);
    }
}

async function insertarProfesional(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let profesion = document.getElementById("profesion").value;
    let url = "http://localhost:3001/profesionales";
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            nombre: nombre,
            edad: edad,
            nacionalidad: nacionalidad,
            profesion: profesion
        }),
        method: "POST"
    }
    try {
        let data = await fetch(url, param);
        let result = await data.json();
        document.getElementById("result").innerHTML = JSON.stringify(result);
    } catch (error) {
        console.log(error);
    }
}

async function actualizarProfesional(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let profesion = document.getElementById("profesion").value;
    let url = "http://localhost:3001/profesionales";
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            nombre: nombre,
            edad: edad,
            nacionalidad: nacionalidad,
            profesion: profesion
        }),
        method: "PUT"
    }
    try {
        let data = await fetch(url, param);
        let result = await data.json();
        document.getElementById("result").innerHTML = JSON.stringify(result);
    } catch (error) {
        console.log(error);
    }
}

async function eliminarProfesional(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let url = "http://localhost:3001/profesionales";
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            nombre: nombre
        }),
        method: "DELETE"
    }
    try {
        let data = await fetch(url, param);
        let result = await data.json();
        if (result.ok) {
            alert("Profesional eliminado correctamente");
        }
    } catch (error) {
        console.log(error);
    }
}