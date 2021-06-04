// function perimetroForma(lado, totalLados, ...listaArgumentos) {
//     console.log(listaArgumentos)
//     console.log(Array.from(arguments).forEach(item => console.log(item)))

//     return lado * totalLados
// }

// console.log(perimetroForma( 10, 2, 'oi', 'Carro'))

// function anunciarGanhadores(premio, ...ganhadores) {
//     ganhadores.forEach((ganhador) => {
//         return console.log(ganhador + ' ganhou um ' + premio)
//     })
// }

// anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria')

const frutas = ['Banana', 'Uva', 'Morango']
const legumes = ['Cenoura', 'Batata']

const comidas = [...frutas, 'Pizza', ...legumes]

console.log(comidas)

const numeroMaior = Math.max(10, 50, 80, 20, 3)

const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43]

const numeroMaximoSpread = Math.max(...listaNumeros)

console.log(numeroMaximoSpread)

let i = 9

do {
    console.log(i)
    i++
}
while (i < 10)