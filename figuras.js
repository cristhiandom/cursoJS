//código del cuadrado
console.group("Cuadrados");


function perimetroCuadrado(lado){
    return lado * 4;
}


function areaCuadrado (lado){
    return lado * lado;
} 

console.groupEnd();

//código del triangulo
console.group("Triangulos");



function perimetroTriangulo (ladoT1, ladoT2, baseT){
    return ladoT1 + ladoT2 + baseT;
}


function areaTriangulo (baseT, alturaT){
    return (baseT * alturaT)/2;
} 

console.groupEnd();

//código del círculo
console.group("Círculos");
const PI = Math.PI;

//console.log("El radio del circulo mide: " + radioCirculo + "cm");
//console.log("El diametro del circulo mide: " + diametroCirculo + "cm");
function diametroCirculo(radioC){
    return radioC * 2;
}

function perimetroCirculo(radioC){
    const diametro = diametroCirculo(radioC);
    return diametro * PI
} 

function areaCirculo (radioC){
    return (radioC * radioC)*PI
}

console.groupEnd();

//Aquí interactuo con el HTML

//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro de tu cuadrado es: " + perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El area de tu cuadrado es: " + area);
}

//Triangulo
function calcularPerimetroTriangulo(){
    const inputBase = document.getElementById("InputTBase");
    const valueBase = parseInt(inputBase.value);
    const inputLado1 = document.getElementById("InputTLado1");
    const valueLado1 = parseInt(inputLado1.value);
    const inputLado2 = document.getElementById("InputTLado2");
    const valueLado2 = parseInt(inputLado2.value);
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert("El perimetro de tu triangulo es: " + perimetro);
}
function calcularAreaTriangulo(){
    const input = document.getElementById("InputCuadrado");
    const inputBase = document.getElementById("InputTBase");
    const valueBase = inputBase.value;
    const inputAltura = document.getElementById("InputTAltura");
    const valueAltura = inputAltura.value;
    const area = areaTriangulo(valueBase, valueAltura);
    alert("El area de tu triangulo es: " + area);
}

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const diametro = diametroCirculo(value);
    const perimetro = perimetroCirculo(value);
    alert("El perimetro de tu cuadrado es: " + perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El area de tu cuadrado es: " + area);
}
