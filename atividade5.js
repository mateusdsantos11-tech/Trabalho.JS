let consumoKwh = 150;

let preco = 0;


if (consumoKwh <= 100) {
    preco = 0.60;
} else if (consumoKwh <= 200) {
    preco = 0.75;
} else {
    preco = 0.90;
}


let total = consumoKwh * preco;


console.log("Consumo: " + consumoKwh + " kWh");
console.log("Valor da conta: R$ " + total.toFixed(2));