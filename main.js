/*Validación formulario*/
let nombre = document.getElementById("nombreJS").value;
let correo = document.getElementById("correoJS").value;
let contraseña = document.getElementById("contraseñaJS").value;


function validar(){
    if (nombre === "" || correo === "" || contraseña === ""){
        alert("El campo nombre está vacío");
        
    }
    else {
        alert("enviado")
        return false;
    }
}

/*No ejecuta la validación de todos los campos, sólo muestra el alert del "nombre"*/