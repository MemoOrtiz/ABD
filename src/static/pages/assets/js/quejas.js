const mensajeMaximoCaracteres = document.getElementById("mensajeMaximoCaracteres");
const mensajeMaximoNumeros = document.getElementById("mensajeMaximoNumeros");

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
        mensajeMaximoNumeros.style.display = "block"; // Mostrar el mensaje
        numericBoxQuejas1.value = currentValue.substring(0, currentValue.length - 1);
    } else {
        mensajeMaximoNumeros.style.display = "none"; // Ocultar el mensaje
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
        mensajeMaximoNumeros.style.display = "block"; // Mostrar el mensaje
        numericBoxQuejas2.value = currentValue.substring(0, currentValue.length - 1);
    } else {
        mensajeMaximoNumeros.style.display = "none"; // Ocultar el mensaje
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