

// variables globales
const ingresartexto = document.querySelector('#inputtexto');
const b_encriptar = document.querySelector('#btn-encriptar');
const b_desencriptar = document.querySelector('#btn-desencriptar');
const b_copiar = document.querySelector('#copiar');
const mostrartexto = document.querySelector('#texto2');




// eventos
eventListeners();

function eventListeners() {
    // inicio de la aplicacion y deshabilitar los botones
    document.addEventListener('DOMContentLoaded', inicioApp);

    // campos de texto en la pagina 

    ingresartexto.addEventListener('input', validar);
    ingresartexto.addEventListener('blur', mostraralertas);

    // botones
    b_encriptar.addEventListener('click', encriptar);
    b_desencriptar.addEventListener('click',desencriptar);
    b_copiar.addEventListener('click', copiar);
    
    }


// funciones 
function inicioApp() {
    // deshabilitar el boton de encriptar y desencriptar
    b_encriptar.disabled = true;
    b_desencriptar.disabled = true;
    b_copiar.disabled = true;
}


function validar(e) {

        // validar que el campo no este vacio 
        if (ingresartexto.value.length > 0) {
            b_encriptar.disabled = false;
            b_desencriptar.disabled = false;
            b_copiar.disabled = true;
        } else {
            b_encriptar.disabled = true;
            b_desencriptar.disabled = true;
            b_copiar.disabled = true;
        }

        //validar que no se ingresen numeros, mayusculas y caracteres especiales
        if(validarsolominuscula(e.target.value)==false){
            mostraralertas('el texto ingresado no es permitido',e.target.parentElement);
            b_encriptar.disabled = true;
            b_desencriptar.disabled = true;
            b_copiar.disabled = true;
            return;
        }

        limpiaralertas(e.target.parentElement);
}


function mostraralertas(mensaje,referencia){
        limpiaralertas(referencia);   
    
        const error= document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('alerta');
        referencia.appendChild(error);
}
    

function limpiaralertas(referencia){
        const alertas = referencia.querySelector('.alerta');
        if(alertas){
            alertas.remove();
        }
}

/// funcion para validar el texto 
function validarsolominuscula(e){
        const textoMinuscula = /^[a-z\s]+$/;
        const resultado = textoMinuscula.test(ingresartexto.value);
        return resultado;
}


function encriptar(texto) {
    var texto = document.querySelector('#inputtexto').value;
    
    const sustituciones = {
            "a": "ai",
            "e": "enter",
            "i": "imes",
            "o": "ober",
            "u": "ufat"
        }; 
    
    let contenido = texto.split("");
    contenido.forEach((element, index) => {
        if(sustituciones[element]){
            contenido[index] = sustituciones[element];
        }
    });
    // join() convierte el array en una cadena de texto. Las comillas van vacías para que la cadena de texto sea tal cual el array.
    let encriptado = contenido.join("");
    console.log(encriptado)
    mostrartexto.innerText = encriptado;
    if(encriptado){
        document.getElementById("imgDer").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.querySelector('#texto2').innerHTML = encriptado;
        mostrartexto.style.display = "show";
        b_copiar.disabled = false;
        document.getElementById("copiar").style.display = "inherit";
    }
    
    return encriptado;
}


function desencriptar(textoencriptado) {
    var textoencriptado = document.querySelector('#inputtexto').value;
    
    const sustitucionesInversas = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };
    
    for (let sustitucion in sustitucionesInversas) {
    const regex = new RegExp(sustitucion, "g");
    textoencriptado = textoencriptado.replace(regex, sustitucionesInversas[sustitucion]);
    }
    
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.querySelector('#texto2').innerHTML = textoencriptado;
    mostrartexto.style.display = "show";
    b_copiar.disabled = false;
    document.getElementById("copiar").style.display = "inherit";

    return textoencriptado;   
}
    
async function copiar(){
    var contenido = document.querySelector("#texto2").textContent;
    //let copytext = worked_text.textContent;
    
    navigator.clipboard.writeText(contenido);
    //alert("Texto copiado al portapapeles");
    swal("Texto copiado"," ", "success");
}


