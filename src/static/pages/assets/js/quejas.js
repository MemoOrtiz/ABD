const mensajeMaximoCaracteres = document.getElementById("mensajeMaximoCaracteres");
const mensajeMaximoNumeros = document.getElementById("mensajeMaximoNumeros");
const mensajeMaximoNumeros1 = document.getElementById("mensajeMaximoNumeros");
const mensajeMaximoNumeros2 = document.getElementById("mensajeMaximoNumeros");

const textBoxQuejas = document.getElementById("textBoxQuejas");
const textBoxQuejas1 = document.getElementById("textBoxQuejas1");
const textBoxQuejas2 = document.getElementById("textBoxQuejas2");

const textBoxQuejas3 = document.getElementById("textBoxQuejas3");
const textBoxQuejas4 = document.getElementById("textBoxQuejas4");
const textBoxQuejas5 = document.getElementById("textBoxQuejas5");

const numericBoxQuejas = document.getElementById("numericBoxQuejas");
const numericBoxQuejas1 = document.getElementById("numericBoxQuejas1");
const numericBoxQuejas2 = document.getElementById("numericBoxQuejas2");
const numericBoxQuejas3 = document.getElementById("numericBoxQuejas3");

textBoxQuejas.setAttribute('maxlength', '30');
textBoxQuejas1.setAttribute('maxlength', '30');
textBoxQuejas2.setAttribute('maxlength', '30');

const socket = io.connect('http://127.0.0.1:5000');

numericBoxQuejas.addEventListener("input", () => {
    let currentValue = numericBoxQuejas.value;
    const regex = /^[0-9]*$/;
    if (!regex.test(currentValue)) {
        currentValue = currentValue.substring(0, currentValue.length - 1);
        numericBoxQuejas.value = currentValue;
    }
    if (parseInt(currentValue) >= 2147483647) {
        mensajeMaximoNumeros.style.display = "block"; // Mostrar el mensaje
        numericBoxQuejas.value = currentValue.substring(0, currentValue.length - 1);
    } else {
        mensajeMaximoNumeros.style.display = "none"; // Ocultar el mensaje
    }
}   );

/* numericBoxQuejas1.addEventListener("input", () => {
    let currentValue = numericBoxQuejas1.value;
    const regex = /^[0-9]*$/;
    if (!regex.test(currentValue)) {
        currentValue = currentValue.substring(0, currentValue.length - 1);
        numericBoxQuejas1.value = currentValue;
    }
    if (parseInt(currentValue) >= 2147483647) {
        mensajeMaximoNumeros1.style.display = "block"; // Mostrar el mensaje
        numericBoxQuejas1.value = currentValue.substring(0, currentValue.length - 1);
    } else {
        mensajeMaximoNumeros1.style.display = "none"; // Ocultar el mensaje
    }
}   ); */

/* numericBoxQuejas2.addEventListener("input", () => {
    let currentValue = numericBoxQuejas2.value;
    const regex = /^[0-9]*$/;
    if (!regex.test(currentValue)) {
        currentValue = currentValue.substring(0, currentValue.length - 1);
        numericBoxQuejas2.value = currentValue;
    }
    if (parseInt(currentValue) >= 2147483647) {
        mensajeMaximoNumeros2.style.display = "block"; // Mostrar el mensaje
        numericBoxQuejas2.value = currentValue.substring(0, currentValue.length - 1);
    } else {
        mensajeMaximoNumeros2.style.display = "none"; // Ocultar el mensaje
    }
}  ); */


textBoxQuejas.addEventListener("input", () => {
    const currentLength = textBoxQuejas.value.length;
    const regex = /^[a-zA-Z]*$/;
    if (!regex.test(textBoxQuejas.value)) {
        textBoxQuejas.value = textBoxQuejas.value.substring(0, currentLength - 1);
    }
    if (currentLength >= 20) {
        mensajeMaximoCaracteres.style.display = "block"; // Mostrar el mensaje
    } else {
        mensajeMaximoCaracteres.style.display = "none"; // Ocultar el mensaje
    }
});

textBoxQuejas1.addEventListener("input", () => {
    const currentLength = textBoxQuejas1.value.length;
    const regex = /^[a-zA-Z]*$/;
    if (!regex.test(textBoxQuejas1.value)) {
        textBoxQuejas1.value = textBoxQuejas1.value.substring(0, currentLength - 1);
    }
    if (currentLength >= 20) {
        mensajeMaximoCaracteres.style.display = "block"; // Mostrar el mensaje
    } else {
        mensajeMaximoCaracteres.style.display = "none"; // Ocultar el mensaje
    }
});

textBoxQuejas2.addEventListener("input", () => {
    const currentLength = textBoxQuejas2.value.length;
    const regex = /^[a-zA-Z]*$/;
    if (!regex.test(textBoxQuejas2.value)) {
        textBoxQuejas2.value = textBoxQuejas2.value.substring(0, currentLength - 1);
    }
    if (currentLength >= 20) {
        mensajeMaximoCaracteres.style.display = "block"; // Mostrar el mensaje
    } else {
        mensajeMaximoCaracteres.style.display = "none"; // Ocultar el mensaje
    }
});

textBoxQuejas3.addEventListener("input", () => {
    const currentLength = textBoxQuejas3.value.length;
    const regex = /^[a-zA-Z]*$/;
    if (!regex.test(textBoxQuejas3.value)) {
        textBoxQuejas3.value = textBoxQuejas3.value.substring(0, currentLength - 1);
    }
    if (currentLength >= 20) {
        mensajeMaximoCaracteres.style.display = "block"; // Mostrar el mensaje
    } else {
        mensajeMaximoCaracteres.style.display = "none"; // Ocultar el mensaje
    }
});

textBoxQuejas4.addEventListener("input", () => {
    const currentLength = textBoxQuejas4.value.length;
    const regex = /^[a-zA-Z]*$/;
    if (!regex.test(textBoxQuejas4.value)) {
        textBoxQuejas4.value = textBoxQuejas4.value.substring(0, currentLength - 1);
    }
    if (currentLength >= 20) {
        mensajeMaximoCaracteres.style.display = "block"; // Mostrar el mensaje
    } else {
        mensajeMaximoCaracteres.style.display = "none"; // Ocultar el mensaje
    }
});

textBoxQuejas5.addEventListener("input", () => {
    const currentLength = textBoxQuejas5.value.length;
    const regex = /^[a-zA-Z]*$/;
    if (!regex.test(textBoxQuejas5.value)) {
        textBoxQuejas5.value = textBoxQuejas5.value.substring(0, currentLength - 1);
    }
    if (currentLength >= 20) {
        mensajeMaximoCaracteres.style.display = "block"; // Mostrar el mensaje
    } else {
        mensajeMaximoCaracteres.style.display = "none"; // Ocultar el mensaje
    }
});

const textBoxQuejas6 = document.getElementById("textBoxQuejas6");

textBoxQuejas6.addEventListener("input", () => {
    const currentLength = textBoxQuejas6.value.length;
    //const regex = /^[a-zA-Z]*$/;
    const regex = /^[^"\\/=^\[\]{};]*$/;
    if (!regex.test(textBoxQuejas6.value)) {
        textBoxQuejas6.value = textBoxQuejas6.value.substring(0, currentLength - 1);
    }
    
}  );

// Obtén una referencia al elemento select
let listaAlumnos = document.getElementById('listaAlumnos');

// Realiza una solicitud a tu API o base de datos para obtener la lista de alumnos
fetch('/alumnos')
    .then(response => response.json())
    .then(data => {
        // Elimina las opciones existentes, excepto la primera
        while (listaAlumnos.options.length > 1) {
            listaAlumnos.remove(1);
        }

        // Agrega una opción por cada alumno en los datos
        data.forEach(alumno => {
            let option = document.createElement('option');
            option.value = alumno.matricula; // Asume que 'matricula' es la PK en tus datos 
            option.text = alumno.matricula;
            console.log(option);
            listaAlumnos.add(option);
        });
    })
    .catch(error => console.error('Error:', error));

// Escucha el evento 'change' en el elemento select

listaAlumnos.addEventListener('change', function() {
    // Obtén la matrícula del alumno seleccionado
    let matricula = this.value;

    // Si la matrícula es una cadena vacía, limpia los campos de texto
    if (matricula === '') {
        document.getElementById('textBoxQuejas').value = '';
        document.getElementById('textBoxQuejas1').value = '';
        document.getElementById('textBoxQuejas2').value = '';
    } else {
        // Realiza una solicitud a tu API para obtener los detalles del alumno
        // Solo si la matrícula no es una cadena vacía
        fetch('/api/alumnos/' + matricula)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Completa los campos de texto con los detalles del alumno
                document.getElementById('textBoxQuejas').value = data.nombre_alumno;
                textBoxQuejas.readOnly = true;
                document.getElementById('textBoxQuejas1').value = data.paterno_alumno;
                textBoxQuejas1.readOnly = true;
                document.getElementById('textBoxQuejas2').value = data.materno_alumno;
                textBoxQuejas2.readOnly = true;
            })
            .catch(error => console.error('Error:', error));
    }
});



// Obtén una referencia al elemento select para los departamentos
let listaDepartamentos = document.getElementById('listaDepartamentos');

// Realiza una solicitud a tu API para obtener la lista de departamentos
fetch('/departamentos')

    .then(response => response.json())
       
    .then(data => {
        // Elimina las opciones existentes, excepto la primera
        while (listaDepartamentos.options.length > 1) {
            listaDepartamentos.remove(1);
        }

        // Agrega una opción por cada departamento en los datos
        data.forEach(departamento => {
            let option = document.createElement('option');
            option.value = departamento.id_Departamento; // Asume que 'id' es la PK en tus datos 
            option.text = departamento.nombre_departamento; // Asume que 'nombre' es el nombre del departamento en tus datos
            console.log(option);
            listaDepartamentos.add(option);
        });
    })
    .catch(error => console.error('Error:', error));

let listaModeradores = document.getElementById('listaModeradores');

fetch('/moderadores')
    
        .then(response => response.json())
        
        .then(data => {
            // Elimina las opciones existentes, excepto la primera
            while (listaModeradores.options.length > 1) {
                listaModeradores.remove(1);
            }
    
            // Agrega una opción por cada departamento en los datos
            data.forEach(moderador => {
                let option = document.createElement('option');
                option.value = moderador.id_moderador; // Asume que 'id' es la PK en tus datos 
                option.text = moderador.nombre_mod + ' ' + moderador.paterno_mod + ' ' + moderador.materno_mod;  
                console.log(option);
                listaModeradores.add(option);
            });
        })
        .catch(error => console.error('Error:', error));


// Escucha el evento 'change' en el elemento select

listaModeradores.addEventListener('change', function() {
    // Obtén el id del moderador seleccionado
    let id_moderador = this.value;

    // Si el id es una cadena vacía, limpia los campos de texto
    if (id_moderador === '') {
        document.getElementById('textBoxQuejas3').value = '';
        document.getElementById('textBoxQuejas4').value = '';
        document.getElementById('textBoxQuejas5').value = '';
    } else {
        // Realiza una solicitud a tu API para obtener los detalles del moderador
        // Solo si el id no es una cadena vacía
        fetch('/api/moderadores/' + id_moderador)
            .then(response => {
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Completa los campos de texto con los detalles del moderador
                document.getElementById('textBoxQuejas3').value = data.nombre_mod;
                textBoxQuejas3.readOnly = true;
                document.getElementById('textBoxQuejas4').value = data.paterno_mod;
                textBoxQuejas4.readOnly = true;
                document.getElementById('textBoxQuejas5').value = data.materno_mod;
                textBoxQuejas5.readOnly = true;
            })
            .catch(error => console.error('Error:', error));
    }
});


let listaConceptosQueja = document.getElementById('listaConceptosQueja');

fetch('/conceptos')
        
    .then(response => response.json())        
        .then(data => {
            // Elimina las opciones existentes, excepto la primera
            while (listaConceptosQueja.options.length > 1) {
                listaConceptosQueja.remove(1);
            }
            // Agrega una opción por cada departamento en los datos
            data.forEach(concepto => {
            let option = document.createElement('option');
            option.value = concepto.id_concepto; // Asume que 'id' es la PK en tus datos 
            option.text = concepto.concepto;  
            console.log(option);
            listaConceptosQueja.add(option);
            });
        })
            .catch(error => console.error('Error:', error));


let listaEstadosQueja = document.getElementById('listaEstatusQueja');

fetch('/estadosQueja')                
        .then(response => response.json())        
            .then(data => {
                // Elimina las opciones existentes, excepto la primera
                while (listaEstadosQueja.options.length > 1) {
                    listaEstadosQueja.remove(1);
                }
                // Agrega una opción por cada departamento en los datos
                data.forEach(estado => {
                let option = document.createElement('option');
                option.value = estado.id_estado_queja; // Asume que 'id' es la PK en tus datos 
                option.text = estado.nombre_estado;  
                console.log(option);
                listaEstadosQueja.add(option);
                });
            })
                .catch(error => console.error('Error:', error));
        
                function cargarDatos(){
                    const urlAPI = '/quejas'; // Ruta de la API Flask
                    fetch(urlAPI)
                        .then(response => response.json())
                        .then(data => {
                            if (data.length >= 1) {
                                document.getElementById('tablaQuejas').style.display = 'block';
                            }
                            let datos = [];
                            data.forEach(queja => {
                                // Crear elemento tr
                                const fila = document.createElement('tr');
                                // Crear elementos td para cada columna
                                const tdQuejaId = document.createElement('td');
                                tdQuejaId.textContent = queja.queja_id;
                                const tdMatricula = document.createElement('td');
                                tdMatricula.textContent = queja.matricula;
                                const tdIdDepartamento = document.createElement('td');
                                tdIdDepartamento.textContent = queja.id_Departamento;
                                const tdIdModerador = document.createElement('td');
                                tdIdModerador.textContent = queja.id_moderador;
                                const tdIdConcepto = document.createElement('td');
                                tdIdConcepto.textContent = queja.id_concepto;
                                const tdIdEstadoQueja = document.createElement('td');
                                tdIdEstadoQueja.textContent = queja.id_estado_queja;
                                const tdDetallesQueja = document.createElement('td');
                                tdDetallesQueja.textContent = queja.detalles_queja;
                                // Agregar celdas a la fila
                                fila.appendChild(tdQuejaId);
                                fila.appendChild(tdMatricula);
                                fila.appendChild(tdIdDepartamento);
                                fila.appendChild(tdIdModerador);
                                fila.appendChild(tdIdConcepto);
                                fila.appendChild(tdIdEstadoQueja);
                                fila.appendChild(tdDetallesQueja);
                                // Agregar fila a la tabla
                                datos.push(fila);
                            });
                            // Obtener contenedor de la tabla
                            const contenedorTabla = document.getElementById('insertar-aqui');
                            // Limpiar el contenedor de la tabla
                            contenedorTabla.innerHTML = '';
                            // Agregar filas a la tabla
                            datos.forEach(fila => contenedorTabla.appendChild(fila));
                        })
                        .catch(error => console.error('Error al obtener datos:', error));
                }    
                
    socket.on('actualizar_quejas', function() {
        cargarDatos();
    });      

    // Emitir el evento 'actualizar_generos' inmediatamente después de que se carga la página
document.addEventListener('DOMContentLoaded', cargarDatos);
    
document.getElementById('botonInsertarQueja').addEventListener('click', function() {
    const queja_id = document.getElementById('numericBoxQuejas').value;
    const matricula = document.getElementById('listaAlumnos').value;
    const id_Departamento = document.getElementById('listaDepartamentos').value;
    const id_moderador = document.getElementById('listaModeradores').value;
    const id_concepto = document.getElementById('listaConceptosQueja').value;
    const id_estado_queja = document.getElementById('listaEstatusQueja').value;
    const detalles_queja = document.getElementById('textBoxQuejas6').value;
    const queja = {
        queja_id: queja_id,
        matricula: matricula,
        id_Departamento: id_Departamento,
        id_moderador: id_moderador,
        id_concepto: id_concepto,
        id_estado_queja: id_estado_queja,
        detalles_queja: detalles_queja
    };
    console.log('Queja:', queja);
    fetch('/insertar-queja', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(queja)
    })
        .then(response => response.json())
        .then(response => {
            console.log('Respuesta:', response);
            document.getElementById('numericBoxQuejas').value = '';
            document.getElementById('listaAlumnos').value = '';
            document.getElementById('listaDepartamentos').value = '';
            document.getElementById('listaModeradores').value = '';
            document.getElementById('listaConceptosQueja').value = '';
            document.getElementById('listaEstatusQueja').value = '';
            document.getElementById('textBoxQuejas6').value = '';
            document.getElementById('textBoxQuejas').value = '';
            document.getElementById('textBoxQuejas1').value = '';
            document.getElementById('textBoxQuejas2').value = '';
            document.getElementById('textBoxQuejas3').value = '';
            document.getElementById('textBoxQuejas4').value = '';
            document.getElementById('textBoxQuejas5').value = '';

        })
        .then(data => {
            console.log('Respuesta:', data);
            socket.emit('actualizar_quejas');
        })
        .catch((error) => {
        if (error.mensaje) {
            alert(error.mensaje);
        }else {
            console.error('Error:', error);
        }
    });
});

document.getElementById('botonEliminarQueja').addEventListener('click', function() {
    const queja_id = document.getElementById('numericBoxQuejas').value;
    var data = {queja_id: queja_id};
    console.log(data);

    fetch('/eliminar-queja/' + queja_id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => {
            console.log('Respuesta:', response);
            document.getElementById('numericBoxQuejas').value = '';
            document.getElementById('listaAlumnos').value = '';
            document.getElementById('listaDepartamentos').value = '';
            document.getElementById('listaModeradores').value = '';
            document.getElementById('listaConceptosQueja').value = '';
            document.getElementById('listaEstatusQueja').value = '';
            document.getElementById('textBoxQuejas6').value = '';
            document.getElementById('textBoxQuejas').value = '';
            document.getElementById('textBoxQuejas1').value = '';
            document.getElementById('textBoxQuejas2').value = '';
            document.getElementById('textBoxQuejas3').value = '';
            document.getElementById('textBoxQuejas4').value = '';
            document.getElementById('textBoxQuejas5').value = '';
        })
        .then(data => {
            console.log('Respuesta:', data);
            //socket.emit('actualizar_quejas');
        })
        .catch((error) => {
        if (error.mensaje) {
            alert(error.mensaje);
        }else {
            console.error('Error:', error);
        }
    });
});

function rellenarCampos(queja_id) {
    // Si queja_id es nulo o indefinido, limpia todos los campos de entrada y sale de la función
    if (!queja_id) {
        document.getElementById('numericBoxQuejas').value = '';
        document.getElementById('listaAlumnos').value = '';
        document.getElementById('listaDepartamentos').value = '';
        document.getElementById('listaModeradores').value = '';
        document.getElementById('listaConceptosQueja').value = '';
        document.getElementById('listaEstatusQueja').value = '';
        document.getElementById('textBoxQuejas6').value = '';
        document.getElementById('textBoxQuejas').value = '';
        document.getElementById('textBoxQuejas1').value = '';
        document.getElementById('textBoxQuejas2').value = '';
        document.getElementById('textBoxQuejas3').value = '';
        document.getElementById('textBoxQuejas4').value = '';
        document.getElementById('textBoxQuejas5').value = '';
        return;
    }
    fetch('/obtener-queja/' + queja_id)
    .then(response => {
        if (!response.ok) {
            // Si la respuesta no es ok, limpia todos los campos de entrada y lanza un error
            //document.getElementById('numericBoxQuejas').value = '';
            document.getElementById('listaAlumnos').value = '';
            document.getElementById('listaDepartamentos').value = '';
            document.getElementById('listaModeradores').value = '';
            document.getElementById('listaConceptosQueja').value = '';
            document.getElementById('listaEstatusQueja').value = '';
            document.getElementById('textBoxQuejas6').value = '';
            document.getElementById('textBoxQuejas').value = '';
            document.getElementById('textBoxQuejas1').value = '';
            document.getElementById('textBoxQuejas2').value = '';
            document.getElementById('textBoxQuejas3').value = '';
            document.getElementById('textBoxQuejas4').value = '';
            document.getElementById('textBoxQuejas5').value = '';
            throw new Error('No se encontró ninguna queja con el ID ' + queja_id);
        }
        return response.json();
    })
        .then(queja => {
            document.getElementById('numericBoxQuejas').value = queja.queja_id;
            console.log(queja.queja_id);
            document.getElementById('listaAlumnos').value = queja.matricula;
            console.log(queja.matricula);
            document.getElementById('listaDepartamentos').value = queja.id_Departamento;
            console.log(queja.id_Departamento);
            document.getElementById('listaModeradores').value = queja.id_moderador;
            console.log(queja.id_moderador);
            document.getElementById('listaConceptosQueja').value = queja.id_concepto;
            console.log(queja.id_concepto);
            document.getElementById('listaEstatusQueja').value = queja.id_estado_queja;
            console.log(queja.id_estado_queja);
            document.getElementById('textBoxQuejas6').value = queja.detalles_queja;
            console.log(queja.detalles_queja);
            
            
            matricula = queja.matricula;
            // Si la matrícula es una cadena vacía, limpia los campos de texto
    if (matricula === '') {
        document.getElementById('textBoxQuejas').value = '';
        document.getElementById('textBoxQuejas1').value = '';
        document.getElementById('textBoxQuejas2').value = '';
    } else {
        // Realiza una solicitud a tu API para obtener los detalles del alumno
        // Solo si la matrícula no es una cadena vacía
        fetch('/api/alumnos/' + matricula)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Completa los campos de texto con los detalles del alumno
                document.getElementById('textBoxQuejas').value = data.nombre_alumno;
                textBoxQuejas.readOnly = true;
                document.getElementById('textBoxQuejas1').value = data.paterno_alumno;
                textBoxQuejas1.readOnly = true;
                document.getElementById('textBoxQuejas2').value = data.materno_alumno;
                textBoxQuejas2.readOnly = true;
            })
            .catch(error => console.error('Error:', error));
    }

    id_moderador = queja.id_moderador;
    // Si el id es una cadena vacía, limpia los campos de texto
    if (id_moderador === '') {
        document.getElementById('textBoxQuejas3').value = '';
        document.getElementById('textBoxQuejas4').value = '';
        document.getElementById('textBoxQuejas5').value = '';
    } else {
        // Realiza una solicitud a tu API para obtener los detalles del moderador
        // Solo si el id no es una cadena vacía
        fetch('/api/moderadores/' + id_moderador)
            .then(response => {
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Completa los campos de texto con los detalles del moderador
                document.getElementById('textBoxQuejas3').value = data.nombre_mod;
                textBoxQuejas3.readOnly = true;
                document.getElementById('textBoxQuejas4').value = data.paterno_mod;
                textBoxQuejas4.readOnly = true;
                document.getElementById('textBoxQuejas5').value = data.materno_mod;
                textBoxQuejas5.readOnly = true;
            })
            .catch(error => console.error('Error:', error));
    }
        })
        .catch(error => console.error('Error:', error));
}

document.getElementById('numericBoxQuejas').addEventListener('change', function() {
    var queja_id = this.value; // Obtiene el valor actual del textBoxQuejas
    rellenarCampos(queja_id);
});

document.getElementById('botonModificarQueja').addEventListener('click', function() {
    const queja_id = document.getElementById('numericBoxQuejas').value;
    const matricula = document.getElementById('listaAlumnos').value;
    const id_Departamento = document.getElementById('listaDepartamentos').value;
    const id_moderador = document.getElementById('listaModeradores').value;
    const id_concepto = document.getElementById('listaConceptosQueja').value;
    const id_estado_queja = document.getElementById('listaEstatusQueja').value;
    const detalles_queja = document.getElementById('textBoxQuejas6').value;
    // Validaciones
if (!queja_id) {
    alert('El campo queja_id no puede estar vacío');
    return;
}
if (!matricula) {
    alert('El campo matricula no puede estar vacío');
    return;
}
if (!id_Departamento) {
    alert('El campo id_Departamento no puede estar vacío');
    return;
}
if (!id_moderador) {
    alert('El campo id_moderador no puede estar vacío');
    return;
}
if (!id_concepto) {
    alert('El campo id_concepto no puede estar vacío');
    return;
}
if (!id_estado_queja) {
    alert('El campo id_estado_queja no puede estar vacío');
    return;
}
if (!detalles_queja) {
    alert('El campo detalles_queja no puede estar vacío');
    return;
}
    const queja = {
        queja_id: queja_id,
        matricula: matricula,
        id_Departamento: id_Departamento,
        id_moderador: id_moderador,
        id_concepto: id_concepto,
        id_estado_queja: id_estado_queja,
        detalles_queja: detalles_queja
    };
    console.log('Queja:', queja);
    fetch('/modificar-queja/' + queja_id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(queja)
    })
        .then(response => response.json())
        .then(response => {
            console.log('Respuesta:', response);
            document.getElementById('numericBoxQuejas').value = '';
            document.getElementById('listaAlumnos').value = '';
            document.getElementById('listaDepartamentos').value = '';
            document.getElementById('listaModeradores').value = '';
            document.getElementById('listaConceptosQueja').value = '';
            document.getElementById('listaEstatusQueja').value = '';
            document.getElementById('textBoxQuejas6').value = '';
            document.getElementById('textBoxQuejas').value = '';
            document.getElementById('textBoxQuejas1').value = '';
            document.getElementById('textBoxQuejas2').value = '';
            document.getElementById('textBoxQuejas3').value = '';
            document.getElementById('textBoxQuejas4').value = '';
            document.getElementById('textBoxQuejas5').value = '';
        })
        .then(data => {
            console.log('Respuesta:', data);
            socket.emit('actualizar_quejas');
        })
        .catch((error) => {
        if (error.mensaje) {
            alert(error.mensaje);
        }else {
            console.error('Error:', error);
        }
    });
});