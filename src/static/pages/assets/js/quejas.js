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

numericBoxQuejas1.addEventListener("input", () => {
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
}   );

numericBoxQuejas2.addEventListener("input", () => {
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
}  );


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

    // Obtén una referencia al campo de entrada y al select
let inputMatricula = document.getElementById('numericBoxQuejas1');
let selectAlumnos = document.getElementById('listaAlumnos');

// Agrega un event listener al campo de entrada para detectar cambios en su valor
inputMatricula.addEventListener('input', function() {
    // Realiza una solicitud a tu API para obtener los datos del alumno con la matrícula ingresada
    fetch('/api/alumnos/' + this.value)
        .then(response => response.json())
        .then(data => {
            // Actualiza el campo de entrada con el nombre del alumno
            inputMatricula.value = data.nombre;

            // Busca la opción en el select que corresponda al alumno y selecciónala
            for (let i = 0; i < selectAlumnos.options.length; i++) {
                if (selectAlumnos.options[i].value == data.id) {
                    selectAlumnos.selectedIndex = i;
                    break;
                }
            }
        })
        .catch(error => console.error('Error:', error));
});