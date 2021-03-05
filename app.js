/* eslint-disable */

let formulario = document.querySelector("#paymentForm");
let inputs = document.querySelectorAll("#paymentForm input");

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  numeros: /^\d{0,16}$/, // 0 a 14 numeros.
   numerosDos: /^\d{0,4}$/, // 0 a 4 numeros
    numerosTres: /^\d{0,100}$/
};
//este objeto me ayudará a saber si un campo es valido o no
let entradas ={
    nombre:false,
    numeros:false,
    numerosDos:false,
    numerosTres:false
}
let validarFormulario=(e)=>{
    switch(e.target.name){
    case "cardName":
        if(expresiones.numeros.test(e.target.value)){
            document.getElementById("error1").classList.remove("alert1-active")
             document.getElementById("error1").classList.add("alert1")
             entradas.numeros=true;
        }else{
            document.getElementById("error1").classList.add("alert1-active")
             entradas.numeros=false;
        }
    break;
    case "ccvName":
        if(expresiones.numerosDos.test(e.target.value)){
            document.getElementById("error2").classList.remove("alert2-active")
             document.getElementById("error2").classList.add("alert2")
              entradas.numerosDos=true;
        }else{
            document.getElementById("error2").classList.add("alert2-active")
             entradas.numerosDos=false;
        }
    break;
    case "amountName":
        if(expresiones.numerosTres.test(e.target.value)){
            document.getElementById("error3").classList.remove("alert3-active")
             document.getElementById("error3").classList.add("alert3")
              entradas.numerosTres=true;
        }else{
            document.getElementById("error3").classList.add("alert3-active")
             entradas.numerosTres=false;
        }
    break;
    case "firstName":
         if(expresiones.nombre.test(e.target.value)){
            document.getElementById("error4").classList.remove("alert4-active")
             document.getElementById("error4").classList.add("alert4")
             entradas.nombre=true;
        }else{
            document.getElementById("error4").classList.add("alert4-active")
             entradas.nombre=false;
        }
    break;
    case "lastName":
         if(expresiones.nombre.test(e.target.value)){
            document.getElementById("error5").classList.remove("alert5-active")
             document.getElementById("error5").classList.add("alert5")
              entradas.nombre=true;
        }else{
            document.getElementById("error5").classList.add("alert5-active")
             entradas.nombre=false;
        }
    break;
    case "cityName":
         if(expresiones.nombre.test(e.target.value)){
            document.getElementById("error6").classList.remove("alert6-active")
             document.getElementById("error6").classList.add("alert6")
              entradas.nombre=true;
        }else{
            document.getElementById("error6").classList.add("alert6-active")
             entradas.nombre=false;
        }
    break;
    case "postalCode":
         if(expresiones.numeros.test(e.target.value)){
            document.getElementById("error7").classList.remove("alert7-active")
             document.getElementById("error7").classList.add("alert7")
              entradas.numeros=true;
        }else{
            document.getElementById("error7").classList.add("alert7-active")
             entradas.numeros=false;
        }
    break;
    }
}
//cuando se levante la tecla, se ejecutará la función validar fomulario, está comprobará los campo cuando se levante la tecla y cuando se presione click fuera del input
inputs.forEach((input)=>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
})
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formaPago=document.getElementById("cardSelection");
    let state=document.getElementById("stateIput");
    if(entradas.nombre && entradas.numeros && entradas.numerosDos && entradas.numerosTres){
        formulario.reset();

    }else{
        document.getElementById("missingFiels").classList.add("alert-active");
        document.querySelectorAll("#paymentForm input").classList.add("background-active");

    }
    
})

function limpiarFormulario(){
formulario.reset();
 document.getElementById("missingFiels").classList.remove("alert-active");
        document.querySelectorAll("#paymentForm input").classList.remove("background-active");

}
document.getElementById("limpiarForm").addEventListener("click", limpiarFormulario);
