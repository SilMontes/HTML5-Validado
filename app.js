/* eslint-disable */

let formulario = document.querySelector("#paymentForm");
let inputs = document.querySelectorAll("#paymentForm input");
//small: messages of error
 let smallError1=document.getElementById("error1");
 let smallError2=document.getElementById("error2");
 let smallError3=document.getElementById("error3");
 let smallError4=document.getElementById("error4");
 let smallError5=document.getElementById("error5");
 let smallError6=document.getElementById("error6");
 let smallError7=document.getElementById("error7");

 //inputs
 let cardInput=document.getElementById("cardInput");
let ccvInput=document.getElementById("ccvInput");
let amountInput=document.getElementById("amountdInput");
let firstInput=document.getElementById("firstInput");
let lastInput=document.getElementById("lastInput");
let cityInput=document.getElementById("cityInput");
let postalInput=document.getElementById("postalInput");

//selection inputs
let option1=document.getElementById("option1");
let option2=document.getElementById("option2");
let option3=document.getElementById("option3");
let option4=document.getElementById("option4");
let option5=document.getElementById("option5");

//radio inputs
let radio1=document.getElementById("radio1");
let radio2=document.getElementById("radio2");
let radio3=document.getElementById("radio3");
let radio4=document.getElementById("radio4");

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
    numerosTres:false,
}
let missing=[];
let validarFormulario=(e)=>{
    switch(e.target.name){
    case "cardName":
        if(expresiones.numeros.test(e.target.value)){
            document.getElementById("error1").classList.remove("alert1-active")
             document.getElementById("error1").classList.add("alert1")
             cardInput.style.background="none"
             cardInput.style.borderColor="#c3c3c3"
             missing.push("Check Card # input")
             entradas.numeros=true;
        }else{
            document.getElementById("error1").classList.add("alert1-active")
            cardInput.style.background="#ffcbdb"
            cardInput.style.borderColor="red"

             entradas.numeros=false;
        }
    break;
    case "ccvName":
        if(expresiones.numerosDos.test(e.target.value)){
            document.getElementById("error2").classList.remove("alert2-active")
             document.getElementById("error2").classList.add("alert2")
              ccvInput.style.background="none"
             ccvInput.style.borderColor="#c3c3c3"
              entradas.numerosDos=true;
        }else{
            document.getElementById("error2").classList.add("alert2-active")
             ccvInput.style.background="#ffcbdb"
             ccvInput.style.borderColor="red"
             entradas.numerosDos=false;
        }
    break;
    case "amountName":
        if(expresiones.numerosTres.test(e.target.value)){
            document.getElementById("error3").classList.remove("alert3-active")
             document.getElementById("error3").classList.add("alert3")
              amountInput.style.background="none"
             amountInput.style.borderColor="#c3c3c3"

              entradas.numerosTres=true;
        }else{
            document.getElementById("error3").classList.add("alert3-active")
            amountInput.style.background="#ffcbdb"
             amountInput.style.borderColor="red"
             entradas.numerosTres=false;
        }
    break;
    case "firstName":
         if(expresiones.nombre.test(e.target.value)){
            document.getElementById("error4").classList.remove("alert4-active")
             document.getElementById("error4").classList.add("alert4")
              firstInput.style.background="none"
             firstInput.style.borderColor="#c3c3c3"
             entradas.nombre=true;
        }else{
            document.getElementById("error4").classList.add("alert4-active")
            firstInput.style.background="#ffcbdb"
             firstInput.style.borderColor="red"
             entradas.nombre=false;
        }
    break;
    case "lastName":
         if(expresiones.nombre.test(e.target.value)){
            document.getElementById("error5").classList.remove("alert5-active")
             document.getElementById("error5").classList.add("alert5")
              lastInput.style.background="none"
             lastInput.style.borderColor="#c3c3c3"
              entradas.nombre=true;
        }else{
            document.getElementById("error5").classList.add("alert5-active")
            lastInput.style.background="#ffcbdb"
             lastInput.style.borderColor="red"
             entradas.nombre=false;
        }
    break;
    case "cityName":
         if(expresiones.nombre.test(e.target.value)){
            document.getElementById("error6").classList.remove("alert6-active")
             document.getElementById("error6").classList.add("alert6")
              cityInput.style.background="none"
             cityInput.style.borderColor="#c3c3c3"
              entradas.nombre=true;
        }else{
            document.getElementById("error6").classList.add("alert6-active")
            cityInput.style.background="#ffcbdb"
             cityInput.style.borderColor="red"
             entradas.nombre=false;
        }
    break;
    case "postalCode":
         if(expresiones.numeros.test(e.target.value)){
            document.getElementById("error7").classList.remove("alert7-active")
             document.getElementById("error7").classList.add("alert7")
              postalnput.style.background="white"
             postalInput.style.borderColor="#c3c3c3"
              entradas.numeros=true;
        }else{
            document.getElementById("error7").classList.add("alert7-active")
            postalInput.style.background="#ffcbdb"
             postalInput.style.borderColor="red"
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
   
    if(entradas.nombre && entradas.numeros && entradas.numerosDos && entradas.numerosTres){ 
        formulario.reset();

    }else{
        document.getElementById("missingFiels").classList.add("alert-active");
        

    }
    
})

function limpiarFormulario(){
formulario.reset();
 document.getElementById("missingFiels").classList.remove("alert-active");
        smallError1.classList.remove("alert1-active");
        smallError2.classList.remove("alert2-active");
        smallError3.classList.remove("alert3-active");
        smallError4.classList.remove("alert4-active");
        smallError5.classList.remove("alert5-active");
        smallError6.classList.remove("alert6-active");
        smallError7.classList.remove("alert7-active");

}
document.getElementById("limpiarForm").addEventListener("click", limpiarFormulario);
