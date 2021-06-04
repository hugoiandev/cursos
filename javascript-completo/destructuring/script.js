const carro = {
    marca: 'Honda',
    ano: 2018,
    modelo: 'City',
}

const {marca, ano, modelo} = carro

console.log(marca, ano)

const cliente = {
    nome: 'Hugo',
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Videos JS', 'Video HTML']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
    }
}

const {livros, videos} = cliente.compras.digitais

console.log(livros.forEach((item) => {
    console.log(item)
}))

const frutas = ['Banana', 'Uva', 'Morango']

const [primeira, segunda, terceira] = frutas

console.log(primeira, segunda, terceira)