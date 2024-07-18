const $formulario = document.querySelector("form");
const Nombre = document.querySelector("#Nombre");
const Apellidos = document.querySelector("#Apellidos");
const Correo = document.querySelector("#Correo");
const genero = document.querySelector("#genero");
const tipo = document.querySelector("#tipo");
const documento = document.querySelector("#documento");
const telefono = document.querySelector("#telefono");
const contrasena = document.querySelector("#contrasena");

const validar = () => {
    event.preventDefault()
    console.log(Nombre.value)//value: valida el valor que se encuentra en la casilla nombre
    if (Nombre.value === "") {// si la casilla nombre no tiene valor es igual a nada ""
        // alert("el campo nombre es obligatorio")
        Nombre.focus()//ayuda a que cuando se de aceptar se selecciona la casilla nombre
        Nombre.classList.add("error")// se agrega el color de la clase error que esta en style al borde de la casilla nombre
    }

    console.log(Apellidos.value)
    if (Apellidos.value === "") {
        // alert("el campo apellidos es obligatorio")
        Apellidos.focus()
        Apellidos.classList.add("error")
    }

    console.log(Correo.value)
    if (Correo.value === "") {
        // alert("el campo apellidos es obligatorio")
        Correo.focus()
        Correo.classList.add("error")
    }

    console.log(genero.value)
    if (genero.value === "") {
        // alert("el campo apellidos es obligatorio")
        genero.focus()
        genero.classList.add("error")
    }

    console.log(tipo.value)
    if (tipo.value === "") {
        // alert("el campo telefono es obligatorio")
        tipo.focus()
        tipo.classList.add("error")
    }

    console.log(documento.value)
    if (documento.value === "") {
        // alert("el campo direccion es obligatorio")
        documento.focus()
        documento.classList.add("error")
    }

    console.log(telefono.value)
    if (telefono.value === "") {
        // alert("el campo tipo es obligatorio")
        telefono.focus()
        telefono.classList.add("error")
    }

    console.log(contrasena.value)
    if (contrasena.value === "") {
        // alert("el campo documento es obligatorio")
        contrasena.focus()
        contrasena.classList.add("error")
    }
}
//quitar el borde rojo al momento que se ingresen los datos y la casilla deje de estar vacia
const remover = (e, input) =>{
    if (input.value != "") {
        input.classList.remove("error");
        input.classList.add("correcto");
    }else{
        input.classList.remove("correcto");
        input.classList.add("error");
    }
}
$formulario.addEventListener("submit" , validar);

Nombre.addEventListener("blur", (event) => {
    remover(event, Nombre);
});
Apellidos.addEventListener("blur", (event) => {
    remover(event, Apellidos);
});
telefono.addEventListener("blur", (event) => {
    remover(event, Correo);
});
genero.addEventListener("blur", (event) => {
    remover(event, genero);
});
tipo.addEventListener("blur", (event) => {
    remover(event, tipo);
});
documento.addEventListener("blur", (event) => {
    remover(event, documento);
});
telefono.addEventListener("blur", (event) => {
    remover(event, telefono);
});
contrasena.addEventListener("blur", (event) => {
    remover(event, contrasena);
});

$formulario.addEventListener("submit", validar);
Nombre.addEventListener("keydown", (event) => {
    remover(event, Nombre);
});
Apellidos.addEventListener("keydown", (event) => {
    remover(event, Apellidos);
});
Correo.addEventListener("keydown", (event) => {
    remover(event, Correo);
});
genero.addEventListener("keydown", (event) => {
    remover(event, genero);
});
tipo.addEventListener("keydown", (event) => {
    remover(event, tipo);
});
documento.addEventListener("keydown", (event) => {
    remover(event, documento);
});
telefono.addEventListener("keydown", (event) => {
    remover(event, telefono);
});
contrasena.addEventListener("keydown", (event) => {
    remover(event, contrasena);
});

//que solo resivan letras y caracteres especiales el nombre y apellido
const letras = (event, elemento) =>{
    let letras =/^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
    // console.log(letras.test(elemento.value))
    if (letras.test(event.key)) {
        console.log("si")
    }else{
        console.log("#no")
    }
}
const numeros =(event) =>{
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
        console.log("a");
    }
}

documento.addEventListener("keypress", numeros)
telefono.addEventListener("keypress", numeros)
Nombre.addEventListener("keypress", letras)
Apellidos.addEventListener("keypress", letras)