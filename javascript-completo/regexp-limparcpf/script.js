const cpfs = document.querySelectorAll('.cpf li')

const elementsInnerText = ([...element]) => {
    return element.map(item => item.innerText)
}

const limparCpf = (cpf) => {
    return cpf.replace(/\D/g, '')
}

const construirCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

const formatarCPFS = (cpfs) => {
    return cpfs.map(limparCpf)
}

const resultado = elementsInnerText(cpfs)

const cpfFormatado = formatarCPFS(resultado)

const cpfFinal = cpfFormatado.map(item => construirCPF(item))

cpfs.forEach((item, index) => {
    item.innerHTML = cpfFinal[index]
})

console.log(cpfFinal)