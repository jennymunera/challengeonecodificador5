//condiciones
//a - ai
//e - enter
//i - imes
//o - ober
//u - ufat

// variables globales
const ingresartexto = document.querySelector('#inputtexto');
const encriptar = document.querySelector('#btn-encriptar');
const desencriptar = document.querySelector('#btn-desencriptar');
const copiar = document.querySelector('#btn-copiar');
const mostrartexto = document.querySelector('#texto2');


// eventos
eventListeners();

function eventListeners() {
    // inicio de la aplicacion y deshabilitar los botones
    document.addEventListener('DOMContentLoaded', inicioApp);

    // campos de texto en la pagina 
    ingresartexto.addEventListener('input', validar);
    ingresartexto.addEventListener('input', mostrar);
    ingresartexto.addEventListener('blur', mostraralertas);

    // botones
    encriptar.addEventListener('click', encriptar);
    desencriptar.addEventListener('click', desencriptar);
    copiar.addEventListener('click', copiar);
    
    }


// funciones 
function inicioApp() {
    // deshabilitar el boton de encriptar y desencriptar
    encriptar.disabled = true;
    desencriptar.disabled = true;
}


    function validar(e) {

        // validar que el campo no este vacio 
        if (ingresartexto.value.length > 0) {
            encriptar.disabled = false;
            desencriptar.disabled = false;
        } else {
            encriptar.disabled = true;
            desencriptar.disabled = true;
        }
        //validar que no se ingresen numeros, mayusculas y caracteres especiales
        if(validarsolominuscula(e.target.value)==false){
            mostraralertas('el texto es invalido debe ingresarse solo letras minusculas,no se permiten las mayusculas, ni los caracteres especiales ni los numeros',e.target.parentElement);
            encriptar.disabled = false;
            desencriptar.disabled = false;
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
        const textoMinuscula = /^[a-z]+$/;
        const resultado = textoMinuscula.test(ingresartexto.value);
        return resultado;
}







/*
function encriptar() {
    var texto = document.getElementById("input-texto").value.toLowerCase();
    // i es para que afecte tanto mayuscula como minuscula
    //g es para toda la liena u oracion
    //s para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    // i es para que afecte tanto mayuscula como minuscula
    //g es para toda la liena u oracion
    //s para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡se copio!");
}
*/