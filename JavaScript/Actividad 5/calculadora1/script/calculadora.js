console.log("Hola, estoy funcionando");
let numero1;
let numero2;
let pantalla;
numero1 = document.getElementById("numero1").value;
numero2 = document.getElementById("numero2").value;
pantalla = document.getElementById("pantalla");

function suma(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultadoSuma = parseInt(numero1) + parseInt(numero2);
    pantalla.textContent = resultadoSuma;
}
function resta(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultadoResta = parseInt(numero1) - parseInt(numero2);
    pantalla.textContent = resultadoResta;
}
function multiplicacion(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultadoMultiplicacion = parseInt(numero1) * parseInt(numero2);
    pantalla.textContent = resultadoMultiplicacion;
}
function division(){
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    let resultadoDivision = parseInt(numero1) / parseInt(numero2);
    pantalla.textContent = resultadoDivision;
}