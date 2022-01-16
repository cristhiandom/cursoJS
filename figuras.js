//código del cuadrado
console.group("Cuadrados");
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado){
    return lado * lado;
} 
//console.log("El area del cuadrado es: " + areaCuadrado) + " cm2";
console.groupEnd();

//código del triangulo
console.group("Triangulos");

//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm y " + baseTriangulo + "cm");
//console.log("La altura del triangulo mide: " + alturaTriangulo + "cm");

function perimetroTriangulo (ladoT1, ladoT2, baseT){
    return ladoT1 + ladoT2 + baseT;
};


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