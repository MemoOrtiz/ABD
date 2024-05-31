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
    if (currentLength >= 2500) {
        mensajeMaximoCaracteres.style.display = "block"; // Mostrar el mensaje
    } else {
        mensajeMaximoCaracteres.style.display = "none"; // Ocultar el mensaje
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
                document.getElementById('textBoxQuejas1').value = data.paterno_alumno;
                document.getElementById('textBoxQuejas2').value = data.materno_alumno;
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
                document.getElementById('textBoxQuejas4').value = data.paterno_mod;
                document.getElementById('textBoxQuejas5').value = data.materno_mod;
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

