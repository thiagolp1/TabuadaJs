const numeroDigitado = prompt("Tabuada do número:");
let n2 = 0
let contador =1;
let Resultado = 'Tabuada';

while (n2 < 10)
{
    n2 = n2 +1;
    contador =  numeroDigitado * n2;
    Resultado = `${Resultado}\n${numeroDigitado} x ${n2} = ${contador}`;
}

alert(Resultado);

