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

// const frase = 'JavaScript, TypeScript, CoffeeScript, Java, 200'

// const regexp = /[A-Za-z]/g

// const resultado = frase.split(regexp)

// console.log(resultado)

// const tags = `
// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
// </ul>
// `

// const regexp = /<li/g

// const resultado = tags.replace(regexp, '$& class="ativa"')

// document.body.innerHTML = resultado

const emails = `
empresa@homail.com
contato@ggmail.com
suporte@oulook.com
andre@origamid.com
`

const regexp = /(\w+@)([\w.]+)/g

// const resultado = emails.replace(regexp, '$1gmail.com')

// console.log(resultado)

const resultado = emails.replace(regexp, (...args) => {
    console.log(args[2])
    if(args[2] === 'homail.com') {
        return args[1] + 'hotmail.com'
    }
    else if(args[2] === 'ggmail.com') {
        return args[1] + 'gmail.com'
    }
    else if(args[2] === 'oulook.com') {
        return args[1] + 'outlook.com'
    }
    else {
        return args[0]
    }
})

console.log(resultado)