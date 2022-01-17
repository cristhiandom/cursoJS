// const precioOriginal = 120;
// const descuento = 18;
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    let discount;

    switch(discountValue) {
        case coupons[0]:
            discount = 15;
            break;
        case coupons[1]:
            discount = 45;
            break;
        case coupons[2]:
            discount = 25;
            break;
    }

    const precioDescuento = calcularPrecioConDescuento(priceValue, discount);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El resulto del precio con descuento es: " + precioDescuento;
}

const coupons = [
    "Primera_Compra",
    "Black_Mondá",
    "Tengo_Down",
];