const prompt = require ('prompt-sync')();

let valorcompra = parseFloat(prompt('digite o valor da compra'));

if(isNaN(valorcompra) || valorcompra <0) {
    console.log('valor invalido');
}else {
let desconto = 0;

if (valorcompra < 100) {
    desconto = 0;
} else if ( valorcompra <300) {
    desconto = 5;
} else if (valorcompra <500) {
    desconto = 10;
} else {
    desconto = 15;
}
let valordesconto = valorcompra * (desconto / 100);
let valorfinal = valorcompra - valordesconto;

console.log('valor da compra: R$' + valorcompra.toFixed(2));
console.log('desconto:' + desconto + '%');
console.log(' valor do desconto:R$' + valordesconto.toFixed(2));
console.log('valor final: R$' + valorfinal.toFixed(2));
}