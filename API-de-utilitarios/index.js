const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// soma dados de um array

var soma = 0;

app.post('/soma', (req, res) => {
    const { numeros } = req.body;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    res.status(200).json(soma);
})

// exibe essa soma

app.get('/soma', (_, res) => {
    res.status(200).json({ resultado: soma });
})

// calcula média de números 
var media;
app.post('/media', (req, res) => {
    const { numeros } = req.body;
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    media = soma / numeros.length;

    res.status(200).json({ resultado: media });
})

// exibe média calculada 

app.get('/media', (_, res) => {
    res.status(200).json({ resultado: media });
})

// Maior e menor número 

app.post('/maior-e-menor', (req, res) => {
    const { numeros } = req.body;
    let i = 0;
    var maior = numeros[0];
    var menor = numeros[0];
    while (i < numeros.length) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
        i++;
    }

    res.status(200).json({
        maior: maior,
        menor: menor
    });
})

// Calcular Bhaskara

app.post('/bhaskara', (req, res) => {
    const { a, b, c } = req.body;
    const delta = b ** 2 - 4 * a * c;
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    res.status(200).json({
        x1: x1,
        x2: x2
    })
})

// Fibonacci 

app.post('/fibonacci', (req, res) => {
    const { numero } = req.body;
    if (numero <= 1) return numero;

    let anterior = 0;
    let atual = 1;

    for (let i = 2; i <= numero; i++) {
        const proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }

    res.status(200).json({
        resultado: atual
    })

})

// Número primo 

app.post('/primo', (req, res) => {
    const { numero } = req.body;
    let primo = true;
    var divisores = 0;
    for (let i = numero; i > 0; i--) {
        if (numero % i == 0) {
            divisores++;
        }
    }
    if (divisores > 2) {
        primo = false;
    }
    res.status(200).json({
        primo: primo
    })
})

// Fatorial 

app.post('/fatorial', (req, res) => {
    const { numero } = req.body;
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    res.status(200).json({
        fatorial: fatorial
    })
})

// Inverter uma String 

app.post('/inverte-string', (req, res) => {
    const { texto } = req.body;
    const stringInvertida = texto.split('').reverse().join('');
    res.status(200).json({
        resultado: stringInvertida
    })
})

// Contar palavras 

app.post('/conta-palavras', (req, res) => {
    const { texto } = req.body;
    const palavras = texto.split(' ');
    const quantidadePalavras = palavras.length;
    res.status(200).json({
        quantidade: quantidadePalavras
    })
})

// Palindromo 

app.post('/palindromo', (req, res) => {
    const { texto } = req.body;
    const stringLimpa = texto.replace(/\s/g, '').toLowerCase();
    const stringInvertida = stringLimpa.split('').reverse().join('');
    const isPalindromo = stringLimpa === stringInvertida;
    res.status(200).json({
        palindromo: isPalindromo
    })
})

app.listen(port, () => {
    console.log('Servidor rodando na porta', port)
})