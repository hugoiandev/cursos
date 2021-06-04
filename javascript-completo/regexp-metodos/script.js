// const regexp = /\w+/gi

// const regexp1 = new RegExp('\\w+', 'gi')

// const frase = 'JavaScript linguagem 101'

//console.log(frase.replace(regexp1, 'X'))

// const regexp = /Java/g

// const frase = 'JavaScript e Java linguagem 101'

// let i = 1

// while(regexp.test(frase)) {
//     console.log(i++, regexp.lastIndex)
// }

// console.log(regexp.exec(frase))

const frase = 'JavaScript, TypeScript, CoffeeScript, Java'

const regexp = /\w+/g


let regexpResult

while((regexpResult = regexp.exec(frase)) !== null) {
    console.log(regexpResult.forEach((item) => {
        console.log(item)
    }))
}


