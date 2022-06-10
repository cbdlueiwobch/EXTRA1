const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const buttonEncriptar = document.querySelector("#encriptar");
const buttonDesencriptar = document.querySelector("#desencriptar");
const buttonCopiar = document.querySelector("#copiar");
const buttonEscuchar = document.querySelector("#escuchar");

const contenedorErrores = document.querySelector(".contenedor-errores");

function validarMensaje () {
    let erroresPrevios = contenedorErrores.querySelectorAll(".error");
    for (let err of erroresPrevios) {
        contenedorErrores.removeChild(err);
    }
    var mensaje = inputMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje) {
        if (!letrasValidas.includes(letra)) {
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent = `La letra ${letra} no es válida`;
            mensajeError.appendChild(p);
        }
    }
    contenedorErrores.appendChild(mensajeError);
    if (mensajeError.children.length === 0) {
        return true;
    }
    return false;
}

function encriptar (){
    if (!validarMensaje()) return;
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    inputResultado.value = mensajeEncriptado;
}

function desencriptar (){
    if (!validarMensaje()) return;
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    inputResultado.value = mensaje;
}

function copiar () {
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
}

function escuchar() {
    var mensajeEncriptado = inputResultado.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
}

buttonEncriptar.onclick = encriptar;

buttonDesencriptar.onclick = desencriptar;

buttonCopiar.onclick = copiar;

buttonEscuchar.onclick = escuchar

