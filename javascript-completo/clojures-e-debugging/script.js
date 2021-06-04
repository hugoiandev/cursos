function contagem() {
    let total = 0
    return function incremento() {
        total++
        console.log(total)
    }
}

contagem()

const function1 = {
    fun1: () => {
        return this
    },
    fun2: function() {
        return this.fun1()
    }
}

class Pessoa {
    constructor(nome, idade, cidade) {
        this.nome = nome,
        this.idade = idade,
        this.cidade = cidade
    }
    darOi() {
        return this.nome
    }
    nomeEIdade() {
        return this.darOi() + ' ' + this.idade
    }
}

const dadosPessoa = new Pessoa('Hugo', 24, 'Hortolandia')

console.log(dadosPessoa)

const contagem2 = () => {
    let total2 = 0

    return {
        fun1: () => {
            for(let i = 0; i < 10; i++) {
                total2++
                console.log(total2)
            }
        }
    }
    
}

console.log(contagem2().fun1())

class Carro {
    constructor(rodas, portas, marca, carro) {
        this.rodas = rodas,
        this.portas = portas,
        this.marca = marca,
        this.carro = carro
    }
    sobreOCarro() {
        return `${this.carro} tem ${this.rodas} rodas, ${this.portas} portas e a marca e ${this.marca}`
    }
}

const honda = new Carro(4, 4, 'Honda', 'Civic')

console.log(honda.sobreOCarro().toUpperCase())