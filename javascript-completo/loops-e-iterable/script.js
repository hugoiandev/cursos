const frutas = ['Banana', 'Morango', 'Uva']
// const frase = 'Isso e JavaScript'

// for(const fruta of frutas) {
//     console.log(fruta)
// }

// for(const char of frase) {
//     console.log(char)
// }

// const button = document.querySelectorAll('button')

// for(const btns of button) {
//     btns.style.color = 'blue'
// }

// console.log(...button)

const carro = {
    marca: 'Honda',
    ano: 2018,
}

Object.defineProperties(carro, {
    rodas: {
        value: 4,
        enumerable: true,
    }
})

for(const key in carro) {
    console.log(key, carro[key])
}

for(const f in frutas) {
    console.log(frutas[f])
}

const btnUnico = document.querySelector('button')
const btnStyles = getComputedStyle(btnUnico)

for(const style in btnStyles) {
    console.log(`${style}: ${btnStyles[style]}`)
}