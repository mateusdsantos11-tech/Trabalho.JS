const prompt = require('prompt-sync')();

let n1 = Number(prompt("Nota 1: "));
let n2 = Number(prompt("Nota 2: "));

let media = (n1 + n2) / 2;

if (media >= 7) {
    console.log("Aprovado");
} else if (media < 4) {
    console.log("Reprovado");
} else {
    let rec = Number(prompt("Nota da recuperação: "));

    if (rec >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}