const textBoxGeneros = document.getElementById("textBoxGeneros");
const mensajeMaximoCaracteres = document.getElementById("mensajeMaximoCaracteres");
const numericBoxGeneros = document.getElementById("numericBoxGeneros");
const mensajeMaximoNumeros = document.getElementById("mensajeMaximoNumeros");
textBoxGeneros.setAttribute('maxlength', '20');
const socket = io.connect('http://127.0.0.1:5000');

textBoxGeneros.addEventListener("input", () => {
    const currentLength = textBoxGeneros.value.length;
    const regex = /^[a-zA-Z ]*$/;
    if (!regex.test(textBoxGeneros.value)) {
        textBoxGeneros.value = textBoxGeneros.value.substring(0, currentLength - 1);
    }
    if (currentLength >= 20) {
        mensajeMaximoCaracteres.style.display = "block"; // Mostrar el mensaje
    } else {
        mensajeMaximoCaracteres.style.display = "none"; // Ocultar el mensaje
    }
});

numericBoxGeneros.addEventListener("input", () => {
    let currentValue = numericBoxGeneros.value;
    const regex = /^[0-9]*$/;
    if (!regex.test(currentValue)) {
        currentValue = currentValue.substring(0, currentValue.length - 1);
        numericBoxGeneros.value = currentValue;
    }
    if (parseInt(currentValue) >= 2147483647) {
        mensajeMaximoNumeros.style.display = "block"; // Mostrar el mensaje
        numericBoxGeneros.value = currentValue.substring(0, currentValue.length - 1);
    } else {
        mensajeMaximoNumeros.style.display = "none"; // Ocultar el mensaje
    }
});

function cargarDatos() {
    const urlAPI = '/generos'; // Ruta de la API Flask

    fetch(urlAPI)
        .then(response => response.json())
        .then(data => {
            if (data.length >= 1) {
                document.getElementById('contenedorTabla').style.display = 'block';
            }
            let datos = [];
            let opciones = [];
            data.forEach(genero => {
                // Crear elemento tr
                const fila = document.createElement('tr');
                // Crear elemento td para el nombre
                const tdNombre = document.createElement('td');
                tdNombre.textContent = genero.nombre;
                // Crear elemento td para el id_genero
                const tdIdGenero = document.createElement('td');
                tdIdGenero.textContent = genero.id_genero;
                // Agregar celdas a la fila
                fila.appendChild(tdIdGenero);
                fila.appendChild(tdNombre);
                // Agregar fila a la tabla
                datos.push(fila);
                // Crear elemento option para el select
                const opcion = document.createElement('option');
                opcion.value = genero.id_genero;
                opcion.textContent = genero.id_genero; // Mostrar el id_genero en el menú desplegable
                opcion.dataset.nombre = genero.nombre; // Almacenar el nombre del género
                // Agregar opción al array de opciones
                opciones.push(opcion);
            });
            // Obtener contenedor de la tabla
            const contenedorTabla = document.getElementById('insertar-aqui');
            // Limpiar el contenedor de la tabla
            contenedorTabla.innerHTML = '';
            // Agregar filas a la tabla
            datos.forEach(fila => contenedorTabla.appendChild(fila));
            // Obtener select
            const selectBoxGeneros = document.getElementById('selectBoxGeneros');
            // Limpiar el select
            selectBoxGeneros.innerHTML = '';
            // Agregar opciones al select
            opciones.forEach(opcion => selectBoxGeneros.appendChild(opcion));
        })
        .catch(error => console.error('Error al obtener datos:', error));
}

socket.on('actualizar_generos', function() {
    cargarDatos();
});

//document.addEventListener('DOMContentLoaded', cargarDatos);
// Emitir el evento 'actualizar_generos' inmediatamente después de que se carga la página
document.addEventListener('DOMContentLoaded', cargarDatos);

document.getElementById('botonInsertarGeneros').addEventListener('click', function() {
    // Recoger los datos de los campos de entrada
    var id_genero = document.getElementById('numericBoxGeneros').value;
    var nombre = document.getElementById('textBoxGeneros').value;

    // Crear un objeto con los datos
    var data = {id_genero: id_genero, nombre: nombre};

    console.log(data);
    
    // Enviar una solicitud AJAX a tu servidor
    fetch('/insertar-dato', {
        method: 'POST', // o 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Limpiar las entradas de texto
        document.getElementById('numericBoxGeneros').value = '';
        document.getElementById('textBoxGeneros').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('botonEliminarGeneros').addEventListener('click', function() {
    // Recoger los datos de los campos de entrada
    var id_genero = document.getElementById('selectBoxGeneros').value;

    // Crear un objeto con los datos
    var data = {id_genero: id_genero};

    console.log(data);
    
    // Enviar una solicitud AJAX a tu servidor
    fetch('/eliminar-dato/' + id_genero, {
        method: 'DELETE', // o 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
    })

    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

