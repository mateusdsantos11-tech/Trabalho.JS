const prompt = require ('prompt-sync')();

let num1 = Number(prompt('digite o primeiro numero:'));
let num2 = Number(prompt('digite o segundo numero:'));
let operação = prompt('escolha a operação(+,-,*,/): ');

let resultado;

if(operação === '+') {
    resultado = num1 + num2;
} else if (operação ==='-') {
    resultado= num1 - num2;
} else if (operação ==='*') {
    resultado = num1*num2;
} else if (operação ==='/') {
if (num2 === 0) {
    console.log('erro: divisão por zero!');
}else {
    resultado = num1 / num2;
}
} else {
    console.log('operação invalida!');
}
if (resultado !== undefined) {
    console.log('resultado: ' + resultado);
}