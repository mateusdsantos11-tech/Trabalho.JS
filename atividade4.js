let bairro = "Centro";
let valorPedido = 70;

let frete = 0;

if (bairro === "Centro") {
    frete = 5;
} else if (bairro === "Brotas") {
    frete = 8;
} else if (bairro === "Itapuã") {
    frete = 12;
} else {
    frete = 15;
}


if (valorPedido >= 80) {
    frete = 0;
}

let total = valorPedido + frete;

console.log("Frete: R$ " + frete);
console.log("Total a pagar: R$ " + total);
