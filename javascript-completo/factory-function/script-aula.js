function createButton(text) { 
    function element() {
        const buttonElement = document.createElement('button')
        buttonElement.innerText = text

        return buttonElement
    }

    return Object.freeze({
        text,
        element,
    })
}

const btnComprar = createButton('Comprar')
const btnVender = createButton('Vender')

btnComprar.text = 'Novo text'

console.log(btnComprar, btnVender)