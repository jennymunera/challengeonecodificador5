//condiciones
//a - ai
//e - enter
//i - imes
//o - ober
//u - ufat

document.addEventListener("DOMContentLoaded", function(event) {

    const ingresartexto = document.querySelector('#inputtexto');
    const encriptar = document.querySelector('#btn-encriptar');
    const desencriptar = document.querySelector('#btn-desencriptar');
    const copiar = document.querySelector('#btn-copiar');
    const mostrartexto = document.querySelector('#texto2');

    ingresartexto.addEventListener('input', validar);
    ingresartexto.addEventListener('input', mostrar);
    encriptar.addEventListener('click', encriptar);
    desencriptar.addEventListener('click', desencriptar);
    copiar.addEventListener('click', copiar);
    ingresartexto.addEventListener('blur', mostraralertas);




    function validar(e) {
        if (ingresartexto.value.length > 0) {
            encriptar.disabled = false;
            desencriptar.disabled = false;
        } else {
            encriptar.disabled = true;
            desencriptar.disabled = true;
        }

        if(validarmayuscula(e.target.value)==true){
            mostraralertas('No se permiten mayusculas',e.target.parentElement);
            encriptar.disabled = false;
            desencriptar.disabled = false;
            return;
        }
        if(validarcaracteres(e.target.value)==true){
            mostraralertas('No se permiten caracteres especiales',e.target.parentElement);
            encriptar.disabled = false;
            desencriptar.disabled = false;
            return;
        }
        //FALTA AGREGAR IF PARA QUE NO SE PUEDAN INGRESAR NUMEROS
        // FALTA AGREGAR IF PARA CUANDO SE CUMPLAN TODAS LAS CONDICIONES Y
        //SE MUESTREN TODAS LAS ALERTAS 
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


    function validarmayuscula(e){
        const textoMayus = /^[A-Z]+$/;
        const resultado = textoMayus.test(ingresartexto.value);
        return resultado;
    }


    function validarcaracteres(e){
        const textoCaracteres = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const resultado = textoCaracteres.test(ingresartexto.value);
        return resultado;
    }


});




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