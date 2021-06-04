import ValidarCpf from'./validar-cpf.js'

const cpf = document.querySelector('#cpf')
const validarCpf = new ValidarCpf(cpf).iniciar()

const validorCpf = new ValidarCpf()

console.log(validarCpf.validar('111 111 111 11'))

console.log(validarCpf)

