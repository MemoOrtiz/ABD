const button = document.getElementById("btn");
const error = document.getElementById("error");

button.addEventListener("click", async (e) => {
    console.log("hola");
    const user = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contraseña").value;
    e.preventDefault();
    if (user != "" && contrasena != ""){
            const res = await fetch("http://127.0.0.1:5000/api/log_in",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: user,
                    password: contrasena
                })
            });
            const data = await res.json();
            if(data.message == "success"){
                location.href = "/pagePrincipal";
            }else{
                error.innerHTML = "Usuario o contraseña invalida";
            }
    }else{
        error.innerHTML = "Campos vacíos";
    }
});