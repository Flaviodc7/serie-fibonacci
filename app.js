const fs = require('fs');

let fibo1 = 1;
let fibo2 = 1;
let serie = '1\n';

for (let i = 2; i <= 7; i++){
    serie += `${fibo2}\n`;
    fibo2 = fibo1 + fibo2;
    fibo1 = fibo2 - fibo1;
}

fs.writeFile('serie_fibonacci/fibonacci.txt', serie, (err) => {
    if (err) throw err;
    console.log("El archivo fue creado con éxito");
})