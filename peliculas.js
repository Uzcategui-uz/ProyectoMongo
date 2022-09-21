function mostrar() {
    document.getElementById("content").innerHTML =
        '<form><h3>Mostrar peliculas</h3><label for="titulo">Titulo:</label><br><input type="text" name="titulo" id="titulo"><br><br><button onclick="mostrarPeliculas(event)">Mostrar</button> <button onclick="mostrarActores(event)">Mostrar Actores</button> <button onclick="mostrarDirectores(event)">Mostrar Directores</button> <button onclick="mostrarGuionistas(event)">Mostrar Guionistas</button></form>'
}

function crear() {
    document.getElementById("content").innerHTML =
        '<div style="display:flex;gap:40px;"><form><h3>Insertar pelicula</h3><label for="titulo">Titulo:</label><br><input type="text" name="titulo" id="titulo"><br><label for="anyo">Año:</label><br><input type="text" name="anyo" id="anyo"><br><label for="pais">Pais:</label><br><input type="text" name="pais" id="pais"><br><br><button onclick="insertarPelicula(event)">Registrar</button></form>      <form><h3>Insertar Actor</h3><label for="tituloA">Titulo de la pelicula:</label><br><input type="text" name="tituloA" id="tituloA"><br><label for="nombreA">Actor:</label><br><input type="text" name="nombreA" id="nombreA"><br><br><button onclick="insertarActor(event)">Registrar</button></form>      <form><h3>Insertar Director</h3><label for="tituloD">Titulo de la pelicula:</label><br><input type="text" name="tituloD" id="tituloD"><br><label for="nombreD">Director:</label><br><input type="text" name="nombreD" id="nombreD"><br><br><button onclick="insertarDirector(event)">Registrar</button></form>     <form><h3>Insertar Guionista</h3><label for="tituloG">Titulo de la pelicula:</label><br><input type="text" name="tituloG" id="tituloG"><br><label for="nombreG">Guionista:</label><br><input type="text" name="nombreG" id="nombreG"><br><br><button onclick="insertarGuionista(event)">Registrar</button></form></div>';
}

function actualizar() {
    document.getElementById("content").innerHTML =
        '<form><h3>Actualizar pelicula</h3><label for="titulo">Titulo:</label><br><input type="text" name="titulo" id="titulo"><br><label for="anyo">Año:</label><br><input type="text" name="anyo" id="anyo"><br><label for="pais">Pais:</label><br><input type="text" name="pais" id="pais"><br><br><button onclick="actualizarPelicula(event)">Actualizar</button></form>';
}

function eliminar() {
    document.getElementById("content").innerHTML =
        '<div style="display:flex;gap:40px;"><form><h3>Eliminar pelicula</h3><label for="titulo">Titulo:</label><br><input type="text" name="titulo" id="titulo"><br><br><button onclick="eliminarPelicula(event)">Eliminar</button></form>   <form><h3>Eliminar Actor</h3><label for="tituloA">Titulo de la pelicula:</label><br><input type="text" name="tituloA" id="tituloA"><br><label for="nombreA">Actor:</label><br><input type="text" name="nombreA" id="nombreA"><br><br><button onclick="eliminarActor(event)">Eliminar</button></form>      <form><h3>Eliminar Director</h3><label for="tituloD">Titulo de la pelicula:</label><br><input type="text" name="tituloD" id="tituloD"><br><label for="nombreD">Director:</label><br><input type="text" name="nombreD" id="nombreD"><br><br><button onclick="eliminarDirector(event)">Eliminar</button></form>     <form><h3>Eliminar Guionista</h3><label for="tituloG">Titulo de la pelicula:</label><br><input type="text" name="tituloG" id="tituloG"><br><label for="nombreG">Guionista:</label><br><input type="text" name="nombreG" id="nombreG"><br><br><button onclick="eliminarGuionista(event)">Eliminar</button></form></div>'
}


async function mostrarPeliculas(event) {
    event.preventDefault();
    let id = document.getElementById("titulo").value;
    let url;
    if (id != "") {
        url = "http://localhost:3001/peliculas?id=" + id;
    } else {
        url = "http://localhost:3001/peliculas";
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

async function mostrarActores(event) {
    event.preventDefault();
    let id = document.getElementById("titulo").value;
    let url = "http://localhost:3001/peliculas/actor?id=" + id;

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

async function mostrarGuionistas(event) {
    event.preventDefault();
    let id = document.getElementById("titulo").value;
    let url = "http://localhost:3001/peliculas/guionista?id=" + id;

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

async function mostrarDirectores(event) {
    event.preventDefault();
    let id = document.getElementById("titulo").value;
    let url = "http://localhost:3001/peliculas/director?id=" + id;
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

async function insertarPelicula(event) {
    event.preventDefault();
    let titulo = document.getElementById("titulo").value;
    let anyo = document.getElementById("anyo").value;
    let pais = document.getElementById("pais").value;
    let url = "http://localhost:3001/peliculas";
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            titulo: titulo,
            anyo: anyo,
            pais: pais
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

async function insertarDirector(event) {
    event.preventDefault();
    let titulo = document.getElementById("tituloD").value;
    let nombre = document.getElementById("nombreD").value;
    let url = "http://localhost:3001/peliculas/director";
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            titulo: titulo,
            nombre: nombre,
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

async function insertarActor(event) {
    event.preventDefault();
    let titulo = document.getElementById("tituloA").value;
    let nombre = document.getElementById("nombreA").value;
    let url = "http://localhost:3001/peliculas/actor";
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            titulo: titulo,
            nombre: nombre,
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

async function insertarGuionista(event) {
    event.preventDefault();
    let titulo = document.getElementById("tituloG").value;
    let nombre = document.getElementById("nombreG").value;
    let url = "http://localhost:3001/peliculas/guionista";
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            titulo: titulo,
            nombre: nombre,
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


async function actualizarPelicula(event) {
    event.preventDefault();
    let titulo = document.getElementById("titulo").value;
    let anyo = document.getElementById("anyo").value;
    let pais = document.getElementById("pais").value;
    let url = "http://localhost:3001/peliculas";
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            titulo: titulo,
            anyo: anyo,
            pais: pais
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

async function eliminarPelicula(event) {
    event.preventDefault();
    let titulo = document.getElementById("titulo").value;
    let url = "http://localhost:3001/peliculas";
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            titulo: titulo
        }),
        method: "DELETE"
    }
    try {
        let data = await fetch(url, param);
        let result = await data.json();
        if (result.ok) {
            alert("Pelicula eliminado correctamente");
        }
    } catch (error) {
        console.log(error);
    }
}

async function eliminarActor(event) {
    event.preventDefault();
    let titulo = document.getElementById("tituloA").value;
    let nombre = document.getElementById("nombreA").value;
    let url = "http://localhost:3001/peliculas/actor";
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            titulo: titulo,
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

async function eliminarDirector(event) {
    event.preventDefault();
    let titulo = document.getElementById("tituloD").value;
    let nombre = document.getElementById("nombreD").value;
    let url = "http://localhost:3001/peliculas/director";
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            titulo: titulo,
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

async function eliminarGuionista(event) {
    event.preventDefault();
    let titulo = document.getElementById("tituloG").value;
    let nombre = document.getElementById("nombreG").value;
    let url = "http://localhost:3001/peliculas/guionista";
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            titulo: titulo,
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